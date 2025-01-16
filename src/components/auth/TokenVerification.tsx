import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

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

      console.log("Token verification params:", { token, type });

      if (!token || type !== 'recovery') {
        console.log("No token or not a recovery request");
        return;
      }

      try {
        const { error } = await supabase.auth.verifyOtp({
          token_hash: token,
          type: 'recovery'
        });

        if (error) {
          console.error("Token verification error:", error);
          toast.error("Invalid or expired password reset link");
          onError("Invalid or expired password reset link. Please request a new one.");
          navigate('/auth/error');
          return;
        }

        console.log("Token verified successfully");
        sessionStorage.setItem('passwordResetToken', token);
        navigate('/auth?mode=reset_password');

      } catch (error) {
        console.error("Token verification error:", error);
        toast.error("Error verifying reset link");
        onError("An error occurred while verifying your reset link. Please try again.");
        navigate('/auth/error');
      }
    };

    handleTokenVerification();
  }, [navigate, onError]);

  return null;
};