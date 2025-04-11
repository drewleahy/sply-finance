
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DocumentManagement } from "@/components/DocumentManagement";
import { UserManagement } from "@/components/UserManagement";
import { LPGroupManagement } from "@/components/LPGroupManagement";
import { DealList } from "@/components/DealList";
import { safeObject } from "@/utils/supabaseHelpers";
import { Database } from "@/integrations/supabase/types";

type Profile = Database['public']['Tables']['profiles']['Row'];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdminAccess = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          navigate("/admin/login");
          return;
        }

        // Use string literal for the eq filter
        const { data, error } = await supabase
          .from("profiles")
          .select("is_admin")
          .eq('user_id', user.id)
          .single();

        // Use safeObject to handle possible type mismatches
        if (error || !safeObject<{is_admin: boolean}>(data, { is_admin: false }).is_admin) {
          navigate("/admin/login");
          return;
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error checking admin access:", error);
        navigate("/admin/login");
      }
    };

    checkAdminAccess();
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <Tabs defaultValue="deals" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="deals">Deals</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="groups">LP Groups</TabsTrigger>
        </TabsList>
        
        <TabsContent value="deals">
          <DealList />
        </TabsContent>
        
        <TabsContent value="documents">
          <DocumentManagement />
        </TabsContent>
        
        <TabsContent value="users">
          <UserManagement />
        </TabsContent>
        
        <TabsContent value="groups">
          <LPGroupManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
}
