import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import type { AuthError } from "@supabase/supabase-js";

const Auth = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleMagicLinkRedirect = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        if (session) {
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Error handling magic link:", error);
        setErrorMessage("Error logging in with magic link. Please try again.");
      }
    };

    // Handle initial session check and magic link redirects
    handleMagicLinkRedirect();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session) {
          navigate("/dashboard");
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const getErrorMessage = (error: AuthError) => {
    switch (error.message) {
      case "Invalid login credentials":
        return "Invalid email or password. Please try again.";
      case "Email not confirmed":
        return "Please verify your email address before signing in.";
      default:
        return error.message;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Welcome Back
        </h1>
        {errorMessage && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
        <SupabaseAuth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#1a1a1a",
                  brandAccent: "#404040",
                },
              },
            },
            style: {
              button: {
                borderRadius: '6px',
                height: '40px',
              },
              input: {
                borderRadius: '6px',
                height: '40px',
              },
            },
          }}
          providers={[]}
        />
      </div>
    </div>
  );
};

export default Auth;