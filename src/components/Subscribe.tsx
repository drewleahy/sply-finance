
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

declare global {
  interface Window {
    hbspt: any;
  }
}

export const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create HubSpot form submission
      window.hbspt.forms.create({
        portalId: "45246649",
        formId: "dae04995-d7a5-4a44-a51a-95843aaa6f63",
        target: formRef.current,
        onFormSubmitted: () => {
          toast({
            title: "Thank you for your interest",
            description: "We'll be in touch with exclusive opportunities.",
          });
          setEmail("");
        }
      });
    } catch (error) {
      console.error('Error submitting to HubSpot:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your email. Please try again.",
        variant: "destructive"
      });
    }

    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <h2 className="text-3xl md:text-4xl font-montserrat text-gray-800 mb-6">
          Join Our Network
        </h2>
        <p className="text-gray-600 text-lg mb-8 font-noto-serif-ethiopic">
          Get access to exclusive investment opportunities and market insights.
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-gray-50 border-2 border-gray-200 text-gray-800 placeholder:text-gray-500/70 focus:border-gray-400 font-noto-serif-ethiopic"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold whitespace-nowrap font-montserrat"
          >
            {isLoading ? "Submitting..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
};
