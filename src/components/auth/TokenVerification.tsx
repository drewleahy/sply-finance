import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface TokenVerificationProps {
  onError: (message: string) => void;
}

export const TokenVerification = ({ onError }: TokenVerificationProps) => {
  useEffect(() => {
    const handleTokenVerification = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      const type = params.get('type');

      if (token && type === 'recovery') {
        try {
          const { error } = await supabase.auth.verifyOtp({
            token_hash: token,
            type: 'recovery'
          });
          if (error) throw error;
        } catch (error) {
          console.error("Error verifying token:", error);
          onError("Error verifying reset password token. Please request a new reset link.");
        }
      }
    };

    handleTokenVerification();
  }, [onError]);

  return null;
};