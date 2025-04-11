
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

export interface MagicLinkHandlerProps {
  onError: (error: string) => void;
}

export const MagicLinkHandler = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const handleMagicLink = async () => {
      try {
        // Supabase Auth automatically handles magic link redirects
        // We just need to refresh the session
        const { data, error } = await supabase.auth.getSession();

        if (error) throw error;
        
        if (data.session) {
          toast({
            title: "Success",
            description: "You have been signed in successfully.",
          });
          
          navigate("/dashboard");
        } else {
          throw new Error("No session found. Magic link may be invalid or expired.");
        }
      } catch (error: any) {
        console.error("Magic link error:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message || "Failed to sign in with magic link. Please try again.",
        });
        navigate("/auth");
      } finally {
        setIsProcessing(false);
      }
    };

    handleMagicLink();
  }, [navigate, toast]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isProcessing ? "Signing in..." : "Sign In Complete"}
        </h2>
        <p className="text-center text-gray-600">
          {isProcessing
            ? "Please wait while we verify your credentials."
            : "You can now close this window."}
        </p>
      </div>
    </div>
  );
};
