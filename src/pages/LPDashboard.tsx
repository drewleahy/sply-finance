import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { DocumentList } from "@/components/DocumentList";

const LPDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLP = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/lp");
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("is_lp")
        .eq("user_id", session.user.id)
        .single();

      if (!profile?.is_lp) {
        navigate("/lp");
      }
      
      setLoading(false);
    };

    checkLP();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/lp");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-luxon-navy">LP Dashboard</h1>
          <Button onClick={handleSignOut} variant="outline">
            Sign Out
          </Button>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Your Documents</h2>
            <DocumentList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LPDashboard;