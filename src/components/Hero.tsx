
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-montserrat font-bold text-gray-800 mb-6 max-w-4xl mx-auto px-4"
        >
          Predictable, Asset-Backed Yields from U.S. Defense & Aerospace Contracts
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto px-4 font-noto-serif-ethiopic"
        >
          SPLYFI offers short-duration, insured purchase order financing, targeting 12%+ annual returns with transparent reporting and institutional-grade underwriting
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center"
        >
          <Button 
            className="bg-sply-navy hover:bg-sply-navy/90 text-white font-noto-serif-ethiopic px-8 py-3 text-lg"
            onClick={() => window.open('https://calendly.com/d/cr4f-gjy-gn9/splyfi-intro-call', '_blank')}
          >
            Connect with Our Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
