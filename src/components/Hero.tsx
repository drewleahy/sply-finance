import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-sply-navy to-black overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/lovable-uploads/152a966e-3c8c-4533-a044-542cbcc6d8e5.png"
          alt="SPLY Capital"
          className="w-64 md:w-80 mx-auto mb-8"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-serif text-sply-gold mb-6"
        >
          Exclusive Investment Opportunities
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-sply-offwhite mb-8 max-w-2xl mx-auto"
        >
          A multi-family office specializing in alternatives, exclusive off-market deals, and private investments.
        </motion.p>
      </div>
    </section>
  );
};