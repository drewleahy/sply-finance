
// Updated to fix type compatibility issues
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

export interface TokenVerificationProps {
  setAuthView: (view: any) => void;
}

export const TokenVerification = ({ setAuthView }: TokenVerificationProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        // Get the URL parameters
        const params = new URLSearchParams(window.location.search);
        const token = params.get("code");

        if (token) {
          // This will automatically set the session if the token is valid
          const { error } = await supabase.auth.verifyOtp({
            token_hash: token,
            type: params.get("type") as any || "email", // Default to email verification
          });

          if (error) throw error;

          // Check if this is a password reset flow
          const mode = params.get("mode");
          if (mode === "reset_password") {
            // Send user to password reset form
            setAuthView("update_password");
          } else {
            // For regular signup verification, redirect to dashboard
            toast({
              title: "Success",
              description: "Email verified successfully. You are now signed in.",
            });

            navigate("/dashboard");
          }
        }
      } catch (error: any) {
        console.error("Token verification error:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message || "Failed to verify your token. Please try again.",
        });
      } finally {
        setIsProcessing(false);
      }
    };

    verifyToken();
  }, [navigate, toast, setAuthView]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isProcessing ? "Verifying..." : "Verification Complete"}
        </h2>
        <p className="text-center text-gray-600">
          {isProcessing
            ? "Please wait while we verify your token."
            : "You can now close this window."}
        </p>
      </div>
    </div>
  );
};
