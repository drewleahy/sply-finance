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

        console.log("Token verification started");
        console.log("Raw token:", token);
        console.log("Type:", type);

        if (!token) {
          console.log("No token found in URL");
          return;
        }

        if (type !== 'recovery') {
          console.log("Not a recovery request");
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
          navigate('/auth?mode=reset_password');
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
  }, [navigate, onError]);

  return null;
};