
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-sply-navy"
          style={{ fontFamily: 'ADAM, sans-serif' }}
        >
          Request Access
        </h2>
        <p className="text-gray-600 mb-8 font-noto-serif-ethiopic text-lg max-w-2xl mx-auto">
          Speak directly with our team to walk through the strategy and next steps.
        </p>
        <Button 
          className="bg-sply-navy hover:bg-sply-navy/90 text-white px-8 py-3 text-lg font-montserrat"
          onClick={() => window.open('https://calendly.com', '_blank')}
        >
          Schedule a Call
        </Button>
      </div>
    </section>
  );
};
