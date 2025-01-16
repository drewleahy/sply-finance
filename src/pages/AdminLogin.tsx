import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session) {
          setIsLoading(true);
          console.log("User signed in, checking admin status...");
          try {
            const { data: profile, error: profileError } = await supabase
              .from("profiles")
              .select("is_admin, email")
              .eq("user_id", session.user.id)
              .single();

            console.log("Profile data:", profile);
            console.log("Profile error:", profileError);

            if (profileError) {
              console.error("Error fetching profile:", profileError);
              throw profileError;
            }

            if (profile?.is_admin) {
              console.log("Admin access granted, redirecting...");
              navigate("/admin/dashboard");
            } else {
              console.log("Admin access denied. Profile:", profile);
              setErrorMessage("Access denied. Admin privileges required. Please contact support if you believe this is an error.");
              await supabase.auth.signOut();
            }
          } catch (error) {
            console.error("Error in admin check process:", error);
            setErrorMessage("An error occurred while checking admin privileges. Please try again.");
            await supabase.auth.signOut();
          } finally {
            setIsLoading(false);
          }
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center mb-8">
          <img
            src="/lovable-uploads/152a966e-3c8c-4533-a044-542cbcc6d8e5.png"
            alt="SPLY Capital"
            className="mx-auto w-48 mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-900">
            Admin Portal
          </h2>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center space-x-2 text-luxon-navy">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Verifying admin privileges...</span>
          </div>
        )}

        {errorMessage && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: "#1A1F2C",
                    brandAccent: "#C5A572",
                  },
                },
              },
            }}
            providers={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;