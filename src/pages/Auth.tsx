import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { AuthError } from "@/components/auth/AuthError";
import { TokenVerification } from "@/components/auth/TokenVerification";
import { MagicLinkHandler } from "@/components/auth/MagicLinkHandler";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const error = searchParams.get("error");
    const errorCode = searchParams.get("error_code");
    const type = searchParams.get("type");

    if (error === "access_denied" && errorCode === "otp_expired") {
      navigate("/auth/error");
      return;
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        navigate("/dashboard");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, location]);

  const type = new URLSearchParams(location.search).get('type');
  const redirectTo = window.location.origin;

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
            {type === 'recovery' ? 'Reset Your Password' : 'Welcome to SPLY Capital'}
          </h2>
          <p className="text-gray-600 mt-2">
            {type === 'recovery' 
              ? 'Please enter your new password below'
              : 'Sign in to access exclusive investment opportunities'
            }
          </p>
        </div>

        <AuthError message={errorMessage} />
        <TokenVerification onError={setErrorMessage} />
        <MagicLinkHandler onError={setErrorMessage} />

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
            redirectTo={redirectTo}
            view={type === 'recovery' ? 'update_password' : 'sign_in'}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;