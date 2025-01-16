import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/lovable-uploads/2eb75140-bd6e-401c-8012-b5bd43009bf6.png"
          alt="SPLY Capital"
          className="w-64 md:w-80 mx-auto mb-8"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-serif text-gray-800 mb-6"
        >
          Fueling Trade Finance For American Manufacturing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Join a Premier Investment Group Backed by Leading Global Partners
        </motion.p>
      </div>
    </section>
  );
};