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

          // After successful verification, redirect to the auth page with recovery flag
          navigate('/auth?type=recovery', { replace: true });
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