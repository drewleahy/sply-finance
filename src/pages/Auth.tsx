
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { MagicLinkHandler } from "@/components/auth/MagicLinkHandler";
import { TokenVerification } from "@/components/auth/TokenVerification";
import { AuthError } from "@/components/auth/AuthError";
import { useToast } from "@/components/ui/use-toast";
import { SITE_URL } from "@/integrations/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AuthView = "sign_in" | "sign_up" | "update_password";

export default function Auth() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const mode = searchParams.get("mode");
  const code = searchParams.get("code");
  
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState<AuthView>(mode === "reset_password" ? "update_password" : "sign_in");

  useEffect(() => {
    // If there's a code parameter and mode is reset_password, set the view to update_password
    if (code && mode === "reset_password") {
      setView("update_password");
    }
  }, [code, mode]);

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

      toast({
        title: "Success",
        description: "You have been signed in!",
      });
      
      navigate("/dashboard");
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

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${SITE_URL}/auth/callback`,
        },
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Success",
        description: "Check your email for the confirmation link.",
      });
      
      navigate("/");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "An error occurred during sign-up.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${SITE_URL}/auth?mode=reset_password`,
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Success",
        description: "Check your email for the password reset link.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "An error occurred during password reset.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a new password.",
      });
      return;
    }
    
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Success",
        description: "Your password has been updated.",
      });
      
      // Navigate to dashboard after password update
      navigate("/dashboard");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "An error occurred during password update.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle magic link or token verification
  if (searchParams.get("type") === "magiclink") {
    return <MagicLinkHandler />;
  }

  if (code) {
    return <TokenVerification setAuthView={(view) => setView(view as AuthView)} />;
  }

  if (searchParams.get("error")) {
    return <AuthError />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>
            {view === "sign_in"
              ? "Sign In"
              : view === "sign_up"
              ? "Sign Up"
              : "Reset Password"}
          </CardTitle>
          <CardDescription>
            {view === "sign_in"
              ? "Enter your credentials to sign in to your account."
              : view === "sign_up"
              ? "Create a new account to get started."
              : "Enter your new password."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={
              view === "sign_in"
                ? handleSignIn
                : view === "sign_up"
                ? handleSignUp
                : view === "update_password"
                ? handlePasswordUpdate
                : handlePasswordReset
            }
            className="space-y-4"
          >
            {view !== "update_password" && (
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            )}

            {(view === "sign_in" || view === "sign_up" || view === "update_password") && (
              <div className="space-y-2">
                <Label htmlFor="password">
                  {view === "update_password" ? "New Password" : "Password"}
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading
                ? "Loading..."
                : view === "sign_in"
                ? "Sign In"
                : view === "sign_up"
                ? "Sign Up"
                : view === "update_password"
                ? "Update Password"
                : "Send Reset Link"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          {view === "sign_in" ? (
            <>
              <Button
                variant="link"
                className="px-0"
                onClick={() => setView("sign_up")}
              >
                Don't have an account? Sign up
              </Button>
              <Button
                variant="link"
                className="px-0"
                onClick={() => setView("update_password")}
              >
                Forgot your password?
              </Button>
            </>
          ) : view === "sign_up" ? (
            <Button
              variant="link"
              className="px-0"
              onClick={() => setView("sign_in")}
            >
              Already have an account? Sign in
            </Button>
          ) : (
            <Button
              variant="link"
              className="px-0"
              onClick={() => setView("sign_in")}
            >
              Back to sign in
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
