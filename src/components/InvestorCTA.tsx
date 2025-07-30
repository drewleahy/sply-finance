
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const InvestorCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 border-y border-slate-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-sply-navy mb-6">
            Ready to Invest?
          </h2>
          
          {/* Subheading */}
          <p className="text-base md:text-lg text-slate-600 mb-10 font-noto-serif-ethiopic leading-relaxed">
            Access predictable yields from U.S. defense receivables.
          </p>
          
          {/* CTA Button */}
          <div className="mb-8">
            <Button
              onClick={() => window.open('https://form.typeform.com/to/IYVafnU0', '_blank')}
              className="bg-sply-navy hover:bg-sply-navy/90 text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 font-montserrat group shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* Qualifier Text */}
          <p className="text-sm text-slate-500 font-noto-serif-ethiopic">
            For accredited investors only. Subject to availability.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
