
import { motion } from "framer-motion";
import { TrendingUp, Shield, Clock, FileText } from "lucide-react";

export const WhatWeDo = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Predictable Returns",
      description: "Target 12%+ annual returns backed by U.S. government and enterprise receivables with transparent fee structures."
    },
    {
      icon: Shield,
      title: "Insured Protection",
      description: "Credit insurance and collateral backing minimize downside risk while preserving upside potential."
    },
    {
      icon: Clock,
      title: "Short Duration",
      description: "Average 60-90 day terms provide liquidity and reduce interest rate sensitivity compared to longer-term alternatives."
    },
    {
      icon: FileText,
      title: "Institutional Grade",
      description: "Rigorous underwriting standards and detailed reporting provide institutional-quality transparency and governance."
    }
  ];

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#fafafa' }}>
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold text-sply-navy mb-4 md:mb-6"
          >
            What We Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-noto-serif-ethiopic leading-relaxed"
          >
            Private credit that powers U.S. manufacturing by funding real receivables — fast, insured, and transparent.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-sply-navy/10 rounded-lg mb-4 md:mb-6 mx-auto">
                <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-sply-navy" />
              </div>
              <h3 className="text-lg md:text-xl font-montserrat font-semibold text-sply-navy mb-3 md:mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-noto-serif-ethiopic leading-relaxed text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
