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

      if (!token || type !== 'recovery') {
        return; // Not a password reset request
      }

      try {
        const { error } = await supabase.auth.verifyOtp({
          token_hash: token,
          type: 'recovery'
        });

        if (error) {
          console.error("Token verification error:", error);
          onError("Invalid or expired password reset link. Please request a new one.");
          navigate('/auth/error');
          return;
        }

        // Store the verified token in sessionStorage
        sessionStorage.setItem('passwordResetToken', token);
        navigate('/auth?mode=reset_password');

      } catch (error) {
        console.error("Token verification error:", error);
        onError("An error occurred while verifying your reset link. Please try again.");
        navigate('/auth/error');
      }
    };

    handleTokenVerification();
  }, [navigate, onError]);

  return null;
};