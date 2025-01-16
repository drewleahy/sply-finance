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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
          Join Our Network
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Get access to exclusive investment opportunities and market insights.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-gray-50 border-2 border-gray-200 text-gray-800 placeholder:text-gray-500/70 focus:border-gray-400"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold whitespace-nowrap"
          >
            {isLoading ? "Submitting..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
};