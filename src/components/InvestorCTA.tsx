
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const InvestorCTA = () => {
  return (
    <section className="py-12 relative overflow-hidden" style={{backgroundColor: '#fafafa'}}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-800 mb-4">
            Ready to Invest?
          </h2>
          
          {/* Subheading */}
          <p className="text-base text-gray-600 mb-6 font-noto-serif-ethiopic">
            Access predictable yields from U.S. defense receivables.
          </p>
          
          {/* CTA Button */}
          <Button
            onClick={() => window.open('https://form.typeform.com/to/IYVafnU0', '_blank')}
            className="bg-sply-navy hover:bg-sply-navy/90 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 font-montserrat group"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          
          {/* Qualifier Text */}
          <p className="text-xs text-gray-400 font-noto-serif-ethiopic mt-4">
            For accredited investors only. Subject to availability.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
