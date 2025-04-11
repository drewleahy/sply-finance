
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { DocumentList } from "@/components/DocumentList";
import { ProfileForm } from "@/components/ProfileForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { safeObject } from "@/utils/supabaseHelpers";

export default function LPDashboard() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLPAccess = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          navigate("/lp/login");
          return;
        }

        const { data, error } = await supabase
          .from("profiles")
          .select("is_lp")
          .eq("user_id", user.id)
          .single();

        if (error || !safeObject(data, { is_lp: false }).is_lp) {
          navigate("/lp/login");
          return;
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error checking LP access:", error);
        navigate("/lp/login");
      }
    };

    checkLPAccess();
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Limited Partner Dashboard</h1>

      <Tabs defaultValue="documents" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        
        <TabsContent value="documents">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-6">Your Documents</h2>
            <DocumentList />
          </div>
        </TabsContent>
        
        <TabsContent value="profile">
          <ProfileForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
