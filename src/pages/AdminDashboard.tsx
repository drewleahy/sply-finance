
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DocumentManagement } from "@/components/DocumentManagement";
import { PartnerManagement } from "@/components/PartnerManagement";
import { LPGroupManagement } from "@/components/LPGroupManagement";
import { UserManagement } from "@/components/UserManagement";
import { DealList } from "@/components/DealList";
import { safeObject } from "@/utils/supabaseHelpers";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          navigate("/admin/login");
          return;
        }

        const { data, error } = await supabase
          .from("profiles")
          .select("is_admin")
          .eq("user_id", user.id)
          .single();

        if (error || !safeObject(data, { is_admin: false }).is_admin) {
          navigate("/admin/login");
          return;
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error checking admin:", error);
        navigate("/admin/login");
      }
    };

    checkAdmin();
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <Tabs defaultValue="deals" className="w-full">
        <TabsList className="w-full justify-start mb-6">
          <TabsTrigger value="deals">Deals</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="partners">Partners</TabsTrigger>
          <TabsTrigger value="lp_groups">LP Groups</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
        </TabsList>
        
        <TabsContent value="deals">
          <DealList />
        </TabsContent>
        
        <TabsContent value="documents">
          <DocumentManagement />
        </TabsContent>
        
        <TabsContent value="partners">
          <PartnerManagement />
        </TabsContent>
        
        <TabsContent value="lp_groups">
          <LPGroupManagement />
        </TabsContent>
        
        <TabsContent value="users">
          <UserManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
}
