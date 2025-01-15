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
    <section className="py-20 bg-gradient-to-b from-sply-navy to-black">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-sply-gold mb-6">
          Join Our Network
        </h2>
        <p className="text-sply-offwhite text-lg mb-8">
          Get access to exclusive investment opportunities and market insights.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/5 border-2 border-sply-gold/30 text-sply-offwhite placeholder:text-sply-muted/70 focus:border-sply-gold"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-sply-gold hover:bg-sply-gold/90 text-sply-navy font-semibold whitespace-nowrap"
          >
            {isLoading ? "Submitting..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
};