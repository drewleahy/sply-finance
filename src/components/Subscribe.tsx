import { useEffect, useRef } from "react";
import { toast } from "@/components/ui/use-toast";

declare global {
  interface Window {
    hbspt: any;
  }
}

export const Subscribe = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create HubSpot form once when component mounts
    if (formContainerRef.current && window.hbspt) {
      window.hbspt.forms.create({
        portalId: "45246649",
        formId: "dae04995-d7a5-4a44-a51a-95843aaa6f63",
        target: formContainerRef.current,
        onFormSubmitted: () => {
          toast({
            title: "Thank you for your interest",
            description: "We'll be in touch with exclusive opportunities.",
          });
        }
      });
    }
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
          Join Our Network
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Get access to exclusive investment opportunities and market insights.
        </p>
        <div ref={formContainerRef} />
      </div>
    </section>
  );
};