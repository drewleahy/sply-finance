
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";

const LPLogin = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session) {
          const { data: profile } = await supabase
            .from("profiles")
            .select("is_lp")
            .eq("user_id", session.user.id as any)
            .maybeSingle();

          if (profile?.is_lp) {
            navigate("/lp/dashboard");
          } else {
            setErrorMessage("Access denied. LP privileges required.");
            await supabase.auth.signOut();
          }
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-luxon-navy flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <img
            src="/lovable-uploads/02facf40-6030-4774-aaf1-20ceb43d794c.png"
            alt="SPLYFI"
            className="mx-auto w-32 mb-6" /* Reduced from w-48 */
          />
          <h1 className="text-2xl font-bold text-luxon-navy">
            LP Portal
          </h1>
        </div>
        
        {errorMessage && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
        <Auth
          supabaseClient={supabase as any}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#C5A572",
                  brandAccent: "#1A1F2C",
                },
              },
            },
          }}
          providers={[]}
        />
      </div>
    </div>
  );
};

export default LPLogin;
