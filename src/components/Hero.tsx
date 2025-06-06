
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[60vh] sm:h-[70vh] md:h-screen flex items-center justify-center overflow-hidden pb-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/591b101e-f9bd-40f0-a39a-1839a13ac1e4.png)',
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-white mb-4 sm:mb-6 max-w-4xl mx-auto px-2 sm:px-4 leading-tight"
        >
          Predictable, Asset-Backed Yields from U.S. Defense & Aerospace Contracts
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto px-2 sm:px-4 font-noto-serif-ethiopic leading-relaxed"
        >
          SPLYFI offers short-duration, insured purchase order financing, targeting 12%+ annual returns with transparent reporting and institutional-grade underwriting
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center px-4"
        >
          <Button 
            className="bg-sply-navy hover:bg-sply-navy/90 text-white font-noto-serif-ethiopic px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg w-full sm:w-auto max-w-xs"
            onClick={() => window.open('https://calendly.com/d/cr4f-gjy-gn9/splyfi-intro-call', '_blank')}
          >
            Connect with Our Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
