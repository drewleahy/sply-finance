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
      try {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const type = params.get('type');

        console.log("Starting token verification process");
        console.log("Token from URL:", token ? "exists" : "missing");
        console.log("Type from URL:", type);

        if (!token) {
          console.log("No token found in URL");
          return;
        }

        if (type !== 'recovery') {
          console.log("Not a recovery request");
          return;
        }

        // Clear any existing session first
        await supabase.auth.signOut();
        
        console.log("Verifying token with Supabase");
        const { data, error } = await supabase.auth.verifyOtp({
          token_hash: token,
          type: 'recovery'
        });

        if (error) {
          console.error("Verification error:", error.message);
          
          if (error.message.includes("security purposes")) {
            console.log("Rate limit error detected");
            toast.error("Please wait 15 seconds before trying again");
            onError("For security purposes, please wait 15 seconds before trying again. Then click the reset link from your email again.");
          } else {
            console.log("Invalid or expired token error");
            toast.error("Invalid or expired reset link");
            onError("Your password reset link has expired or is invalid. Please request a new one.");
          }
          
          navigate('/auth/error');
          return;
        }

        if (data) {
          console.log("Token verified successfully");
          sessionStorage.setItem('passwordResetToken', token);
          navigate('/auth?mode=reset_password');
        }

      } catch (error) {
        console.error("Unexpected error during verification:", error);
        toast.error("Error verifying reset link");
        onError("An unexpected error occurred. Please try requesting a new reset link.");
        navigate('/auth/error');
      }
    };

    handleTokenVerification();
  }, [navigate, onError]);

  return null;
};