import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { AuthError } from "@/components/auth/AuthError";
import { TokenVerification } from "@/components/auth/TokenVerification";
import { MagicLinkHandler } from "@/components/auth/MagicLinkHandler";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");
  const [view, setView] = useState<"sign_in" | "update_password">("sign_in");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mode = params.get('mode');
    
    if (mode === 'reset_password') {
      const token = sessionStorage.getItem('passwordResetToken');
      if (!token) {
        console.log("No reset token found in session");
        setErrorMessage("Invalid password reset session. Please request a new reset link.");
        toast.error("Invalid reset session");
        navigate('/auth');
        return;
      }
      console.log("Setting view to update_password");
      setView("update_password");
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth event:", event);
      
      if (event === 'PASSWORD_RECOVERY') {
        console.log("Password recovery event received");
        setView('update_password');
      } else if (event === 'SIGNED_IN') {
        console.log("User signed in, clearing session storage");
        sessionStorage.removeItem('passwordResetToken');
        navigate('/dashboard');
      }
    });

    return () => {
      console.log("Cleaning up auth state change subscription");
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
            {view === 'update_password' ? 'Reset Your Password' : 'Welcome to SPLY Capital'}
          </h2>
          <p className="text-gray-600 mt-2">
            {view === 'update_password' 
              ? 'Please enter your new password below'
              : 'Sign in to access exclusive investment opportunities'
            }
          </p>
        </div>

        {errorMessage && (
          <Alert variant="destructive">
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        <TokenVerification onError={setErrorMessage} />
        <MagicLinkHandler onError={setErrorMessage} />

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <SupabaseAuth
            supabaseClient={supabase}
            view={view}
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
            redirectTo={`${window.location.origin}/auth`}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;