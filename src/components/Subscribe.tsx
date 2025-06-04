
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

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
    <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#fafafa'}}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sply-navy rounded-full mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-800 mb-4">
              Join Our Exclusive Network
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-noto-serif-ethiopic leading-relaxed">
              Get access to exclusive investment opportunities, market insights, and priority deal flow in the private credit space.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="relative mb-6">
                <Input
                  type="email"
                  placeholder="Enter your professional email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-14 pl-4 pr-4 text-lg bg-gray-50 border-2 border-gray-200 text-gray-800 placeholder:text-gray-500/70 focus:border-sply-navy focus:bg-white transition-all duration-300 font-noto-serif-ethiopic rounded-xl"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-sply-navy hover:bg-sply-navy/90 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] font-montserrat group"
              >
                {isLoading ? (
                  "Submitting..."
                ) : (
                  <>
                    Subscribe to Exclusive Updates
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
            
            <p className="text-sm text-gray-500 mt-6 font-noto-serif-ethiopic">
              Join 500+ institutional investors and family offices receiving our insights.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-sply-navy font-montserrat">$31M+</div>
              <div className="text-sm text-gray-600 font-noto-serif-ethiopic">Assets Under Management</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-sply-navy font-montserrat">500+</div>
              <div className="text-sm text-gray-600 font-noto-serif-ethiopic">Network Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-sply-navy font-montserrat">12%+</div>
              <div className="text-sm text-gray-600 font-noto-serif-ethiopic">Target Returns</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
