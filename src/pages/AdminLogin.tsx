
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { safeObject } from "@/utils/supabaseHelpers";
import { Database } from "@/integrations/supabase/types";

type Profile = Database['public']['Tables']['profiles']['Row'];

export default function AdminLogin() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Check if user is already logged in and is admin
  const checkExistingSession = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Use string literal for the eq filter
        const { data, error } = await supabase
          .from("profiles")
          .select("is_admin, email")
          .eq('user_id', user.id)
          .single();

        // Use safeObject to handle possible null values
        const profile = safeObject<{is_admin: boolean, email: string}>(data, { is_admin: false, email: '' });
        
        if (profile.is_admin) {
          setEmail(profile.email);
          setIsLoggedIn(true);
        }
      }
    } catch (error) {
      console.error("Session check error:", error);
    }
  };

  useState(() => {
    checkExistingSession();
  });

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error("Failed to get user after sign in");
      }

      // Use string literal for eq filter
      const { data, error: profileError } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq('user_id', user.id)
        .single();

      if (profileError) {
        throw profileError;
      }

      // Use safeObject to handle possible null values
      const profile = safeObject<{is_admin: boolean}>(data, { is_admin: false });
      
      if (!profile.is_admin) {
        throw new Error("You do not have admin access");
      }

      toast({
        title: "Success",
        description: "You have been signed in to the admin dashboard!",
      });
      
      navigate("/admin");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "An error occurred during sign-in.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleContinue = () => {
    navigate("/admin");
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setEmail("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
        
        {isLoggedIn ? (
          <div className="space-y-4">
            <p className="text-center">
              You are already signed in as <strong>{email}</strong>
            </p>
            <div className="flex space-x-4 justify-center">
              <Button onClick={handleContinue} className="w-1/2">
                Continue to Admin
              </Button>
              <Button onClick={handleSignOut} variant="outline" className="w-1/2">
                Sign Out
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
