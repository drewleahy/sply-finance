
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Shield, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const MarketOpportunity = () => {
  const opportunities = [
    {
      title: "$2.3T Infrastructure Gap",
      description: "Federal investment creating massive demand for U.S. manufacturing capacity",
      icon: Building2,
      stat: "$2.3T",
      delay: 0,
    },
    {
      title: "Bank Credit Contraction", 
      description: "Traditional lenders pulling back from small business financing",
      icon: TrendingUp,
      stat: "-15%",
      delay: 0.15,
    },
    {
      title: "Supply Chain Reshoring",
      description: "Companies bringing manufacturing back to America, requiring working capital",
      icon: Shield,
      stat: "68%",
      delay: 0.3,
    },
    {
      title: "Private Credit Boom",
      description: "Alternative lending filling the financing gap with higher yields",
      icon: DollarSign,
      stat: "$1.5T",
      delay: 0.45,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-800 mb-6 max-w-4xl mx-auto px-4">
              The Perfect Storm for Private Credit
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sply-navy to-sply-gold mx-auto mb-8 rounded-full"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto font-noto-serif-ethiopic leading-relaxed">
              As traditional financing shrinks and infrastructure spending surges, SPLYFI positions you at the center of this massive market opportunity — with institutional-grade protection and transparency.
            </p>
          </motion.div>

          {/* Opportunities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: opportunity.delay, 
                  duration: 0.7, 
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="group"
              >
                <Card className="bg-white border-2 border-gray-200 h-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-sply-navy/20">
                  <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: opportunity.delay + 0.3, duration: 0.6, type: "spring" }}
                      className="w-16 h-16 bg-gradient-to-br from-sply-navy to-sply-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg"
                    >
                      <opportunity.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="text-2xl font-bold text-sply-gold mb-2 font-montserrat">
                      {opportunity.stat}
                    </div>
                    <h4 className="font-bold text-lg mb-3 font-montserrat leading-tight text-gray-800">
                      {opportunity.title}
                    </h4>
                    <p className="text-sm font-noto-serif-ethiopic text-gray-600 leading-relaxed">
                      {opportunity.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Bottom Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="text-center mt-20"
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-gray-600 font-noto-serif-ethiopic leading-relaxed mb-6">
                SPLYFI positions you at the center of this massive market opportunity through a proven, repeatable framework with institutional-grade protection and transparency.
              </p>
              <div className="flex justify-center items-center space-x-6 text-lg text-gray-500 font-montserrat">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-sply-navy rounded-full"></div>
                  <span>Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-sply-gold rounded-full"></div>
                  <span>Transparent</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                  <span>Repeatable</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
