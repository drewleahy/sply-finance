
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase, SITE_URL } from "@/integrations/supabase/client";
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
  const [view, setView] = useState<"sign_in" | "sign_up" | "update_password">("sign_in");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mode = params.get('mode');
    const code = params.get('code');
    
    // Check if we're on the wrong domain
    if (!window.location.origin.includes("splyfinance.com")) {
      console.log("Wrong domain detected in Auth component, redirecting to correct domain");
      // Preserve the hash and query parameters when redirecting
      const newUrl = `${SITE_URL}${window.location.pathname}${window.location.search}${window.location.hash}`;
      window.location.href = newUrl;
      return;
    }
    
    // Handle password reset from URL params
    if (mode === 'reset_password' || code) {
      console.log("Password reset mode detected by URL params");
      setView("update_password");
    }

    // Check if there's an existing session first
    const checkExistingSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        
        if (data.session) {
          console.log("Existing session found, redirecting");
          navigate('/dashboard');
        }
      } catch (error) {
        console.error("Error checking session:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkExistingSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth event:", event);
      
      if (event === 'PASSWORD_RECOVERY') {
        console.log("Password recovery event received");
        setView('update_password');
      } else if (event === 'SIGNED_IN') {
        console.log("User signed in, redirecting to dashboard");
        sessionStorage.removeItem('passwordResetToken');
        navigate('/dashboard');
      }
    });

    return () => {
      console.log("Cleaning up auth state change subscription");
      subscription.unsubscribe();
    };
  }, [navigate, location]);

  console.log("Current view:", view);
  console.log("Current site URL for redirects:", SITE_URL);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center mb-8">
          <img
            src="/lovable-uploads/02facf40-6030-4774-aaf1-20ceb43d794c.png"
            alt="SPLYFI"
            className="mx-auto w-32 mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-900">
            {view === 'update_password' ? 'Reset Your Password' : 'Welcome to SPLYFI'}
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

        {isLoading ? (
          <div className="flex justify-center items-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <>
            <TokenVerification onError={setErrorMessage} onSetView={setView} />
            <MagicLinkHandler onError={setErrorMessage} />

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <SupabaseAuth
                supabaseClient={supabase as any}
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
                redirectTo={`${SITE_URL}/auth`}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
