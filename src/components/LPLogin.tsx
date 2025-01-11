import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export const LPLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: "Welcome back!",
        description: "Successfully logged in.",
      });
    } catch (error) {
      toast({
        title: "Error logging in",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-luxon-navy">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-3xl md:text-4xl font-serif text-luxon-gold text-center mb-8">
          LP Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-luxon-gold/30 text-luxon-offwhite placeholder:text-luxon-muted"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white/10 border-luxon-gold/30 text-luxon-offwhite placeholder:text-luxon-muted"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-luxon-gold hover:bg-luxon-gold/90 text-luxon-navy"
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </section>
  );
};