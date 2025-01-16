import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Check for error parameters in the URL
    const searchParams = new URLSearchParams(location.hash.substring(1));
    const error = searchParams.get("error");
    const errorCode = searchParams.get("error_code");

    if (error === "access_denied" && errorCode === "otp_expired") {
      navigate("/auth/error");
      return;
    }

    const handleMagicLinkRedirect = async () => {
      const hash = window.location.hash;
      if (hash && hash.includes('access_token')) {
        try {
          const { data, error } = await supabase.auth.getSession();
          if (error) throw error;
          
          if (data.session) {
            navigate("/dashboard");
          }
        } catch (error) {
          console.error("Error handling magic link:", error);
          setErrorMessage("Error logging in with magic link. Please try again.");
        }
      }
    };

    handleMagicLinkRedirect();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        navigate("/dashboard");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate, location]);

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
            Welcome to SPLY Capital
          </h2>
          <p className="text-gray-600 mt-2">
            Sign in to access exclusive investment opportunities
          </p>
        </div>

        {errorMessage && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <SupabaseAuth
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
            redirectTo={window.location.origin}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;