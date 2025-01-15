import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Thank you for your interest",
      description: "We'll be in touch with exclusive opportunities.",
    });

    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-sply-navy">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-sply-gold mb-6">
          Join Our Network
        </h2>
        <p className="text-sply-offwhite mb-8">
          Get access to exclusive investment opportunities and market insights.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 border-sply-gold/30 text-sply-offwhite placeholder:text-sply-muted"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-sply-gold hover:bg-sply-gold/90 text-sply-navy"
          >
            {isLoading ? "Submitting..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
};