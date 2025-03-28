
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase, SITE_URL } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface TokenVerificationProps {
  onError: (message: string) => void;
  onSetView: (view: string) => void;
}

export const TokenVerification = ({ onError, onSetView }: TokenVerificationProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleTokenVerification = async () => {
      try {
        console.log("Current URL:", window.location.href);
        console.log("Expected domain should be:", SITE_URL);
        
        // Check if we're on the wrong domain - verify we're on splyfinance.com
        if (!window.location.origin.includes("splyfinance.com")) {
          console.log("Wrong domain detected, redirecting to correct domain");
          // Preserve the hash and query parameters when redirecting
          const newUrl = `${SITE_URL}${window.location.pathname}${window.location.search}${window.location.hash}`;
          window.location.href = newUrl;
          return;
        }
        
        // First check if we have a hash with access_token (magic link or recovery)
        const hash = window.location.hash;
        if (hash && hash.includes('access_token')) {
          console.log("Access token found in URL hash");
          
          // Parse the hash to extract the token type
          const hashParams = new URLSearchParams(hash.substring(1));
          const type = hashParams.get('type');
          
          console.log("Token type from hash:", type);
          
          // If it's a recovery token, handle password reset flow
          if (type === 'recovery') {
            console.log("Handling recovery flow");
            // Get session to confirm authentication
            const { data, error } = await supabase.auth.getSession();
            
            if (error) {
              console.error("Session error:", error);
              throw error;
            }
            
            if (data.session) {
              console.log("User authenticated with recovery token");
              toast.success("Please set your new password");
              onSetView('update_password');
              return;
            }
          }
          
          return;
        }
        
        // Check for recovery code parameter (for password reset)
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        
        if (code) {
          console.log("Recovery code found:", code);
          
          try {
            // For newer Supabase clients, recovery works with the code parameter
            const { data, error } = await supabase.auth.exchangeCodeForSession(code);
            
            if (error) {
              console.error("Code verification error:", error);
              toast.error("Invalid or expired reset link");
              onError("Your password reset link is invalid or has expired. Please request a new one.");
              navigate('/auth');
              return;
            }
            
            if (data.session) {
              console.log("Successfully exchanged code for session");
              toast.success("Please set your new password");
              onSetView('update_password');
              return;
            }
          } catch (verifyError) {
            console.error("Error during code verification:", verifyError);
            toast.error("Error processing reset link");
            onError("An error occurred processing your reset link. Please try again.");
          }
        }
        
        // Legacy handling for token parameter in URL query
        const token = params.get('token');
        const tokenType = params.get('type');

        if (!token) {
          console.log("No token found in URL query");
          return;
        }

        if (tokenType !== 'recovery') {
          console.log("Not a recovery request from query params");
          return;
        }

        // Clear any existing sessions
        console.log("Clearing existing session");
        await supabase.auth.signOut();
        
        // Small delay to ensure session is cleared
        await new Promise(resolve => setTimeout(resolve, 500));

        console.log("Attempting to verify token");
        const { data, error } = await supabase.auth.verifyOtp({
          token_hash: token,
          type: 'recovery'
        });

        console.log("Verify response:", { data, error });

        if (error) {
          console.error("Verification error:", error);
          
          if (error.message.includes("security purposes")) {
            toast.error("Please wait 15 seconds before trying again");
            onError("For security purposes, please wait 15 seconds before trying again. Then click the reset link from your email again.");
          } else {
            toast.error("Invalid or expired reset link");
            onError("Your password reset link has expired or is invalid. Please request a new one.");
          }
          
          navigate('/auth/error');
          return;
        }

        if (data?.user) {
          console.log("Token verified successfully");
          console.log("User data:", data.user);
          sessionStorage.setItem('passwordResetToken', token);
          onSetView('update_password');
        } else {
          console.log("No user data in response");
          toast.error("Invalid reset link");
          onError("Invalid reset link. Please request a new one.");
          navigate('/auth/error');
        }

      } catch (error) {
        console.error("Unexpected error during verification:", error);
        toast.error("Error verifying reset link");
        onError("An unexpected error occurred. Please try requesting a new reset link.");
        navigate('/auth/error');
      }
    };

    handleTokenVerification();
  }, [navigate, onError, onSetView, location]);

  return null;
};
