
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase, SITE_URL } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface MagicLinkHandlerProps {
  onError: (message: string) => void;
}

export const MagicLinkHandler = ({ onError }: MagicLinkHandlerProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleMagicLinkRedirect = async () => {
      const hash = window.location.hash;
      
      // Check if we're on the wrong domain
      if (window.location.origin.includes("splycapital.com")) {
        console.log("Wrong domain detected in MagicLinkHandler, redirecting to correct domain");
        // Preserve the hash and query parameters when redirecting
        const newUrl = `${SITE_URL}${window.location.pathname}${window.location.search}${window.location.hash}`;
        window.location.href = newUrl;
        return;
      }
      
      if (hash && hash.includes('access_token')) {
        try {
          console.log("Processing access token from hash");
          
          // Parse hash to check if it's a recovery token
          const hashParams = new URLSearchParams(hash.substring(1));
          const type = hashParams.get('type');
          
          // Skip if it's a recovery token (handled by TokenVerification)
          if (type === 'recovery') {
            console.log("Recovery token - skipping magic link handler");
            return;
          }
          
          console.log("Getting session after magic link auth");
          const { data, error } = await supabase.auth.getSession();
          
          if (error) {
            console.error("Error handling magic link:", error);
            throw error;
          }
          
          if (data.session) {
            console.log("User authenticated via magic link, redirecting to dashboard");
            toast.success("Successfully logged in");
            navigate("/dashboard");
          }
        } catch (error) {
          console.error("Error handling magic link:", error);
          onError("Error logging in. Please try again.");
        }
      }
    };

    handleMagicLinkRedirect();
  }, [navigate, onError]);

  return null;
};
