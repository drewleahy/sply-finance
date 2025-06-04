
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-3xl font-montserrat text-gray-800 mb-6 max-w-4xl mx-auto px-4 leading-tight"
        >
          Predictable, Asset-Backed Yields from U.S. Defense & Aerospace Contracts
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-sm md:text-base text-gray-600 mb-8 max-w-2xl mx-auto px-4 font-noto-serif-ethiopic leading-relaxed"
        >
          SPLYFI offers short-duration, insured purchase order financing, targeting 12%+ annual returns with transparent reporting and institutional-grade underwriting
        </motion.p>
      </div>
    </section>
  );
};
