import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface TokenVerificationProps {
  onError: (message: string) => void;
}

export const TokenVerification = ({ onError }: TokenVerificationProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleTokenVerification = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      const type = params.get('type');
      const redirectTo = params.get('redirect_to');

      if (token && type === 'recovery') {
        try {
          const { error } = await supabase.auth.verifyOtp({
            token_hash: token,
            type: 'recovery'
          });

          if (error) {
            console.error("Error verifying token:", error);
            onError("Error verifying reset password token. Please request a new reset link.");
            navigate('/auth/error');
            return;
          }

          // If verification successful, redirect to auth page with recovery flag
          const redirectURL = new URL(redirectTo || window.location.origin);
          redirectURL.pathname = '/auth';
          redirectURL.searchParams.set('type', 'recovery');
          window.location.href = redirectURL.toString();
        } catch (error) {
          console.error("Error in token verification:", error);
          onError("Error verifying reset password token. Please request a new reset link.");
          navigate('/auth/error');
        }
      }
    };

    handleTokenVerification();
  }, [onError, navigate]);

  return null;
};