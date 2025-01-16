import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface MagicLinkHandlerProps {
  onError: (message: string) => void;
}

export const MagicLinkHandler = ({ onError }: MagicLinkHandlerProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleMagicLinkRedirect = async () => {
      const hash = window.location.hash;
      if (hash && hash.includes('access_token')) {
        try {
          const { data, error } = await supabase.auth.getSession();
          if (error) throw error;
          
          if (data.session) {
            navigate("/dashboard");
          }
        } catch (error) {
          console.error("Error handling magic link:", error);
          onError("Error logging in with magic link. Please try again.");
        }
      }
    };

    handleMagicLinkRedirect();
  }, [navigate, onError]);

  return null;
};