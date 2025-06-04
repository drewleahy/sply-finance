
import { motion } from "framer-motion";
import { FileText, Shield, DollarSign, CheckCircle, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorks = () => {
  const steps = [
    {
      title: "PO Issued",
      subtitle: "(by F1000/Gov)",
      icon: FileText,
      delay: 0,
    },
    {
      title: "Underwritten & Insured",
      subtitle: "(SPLYFI + Allianz)",
      icon: Shield,
      delay: 0.15,
    },
    {
      title: "Capital Deployed",
      subtitle: "(to U.S. vendor)",
      icon: DollarSign,
      delay: 0.3,
    },
    {
      title: "Order Fulfilled",
      subtitle: "(payment collected)",
      icon: CheckCircle,
      delay: 0.45,
    },
    {
      title: "Yield Returned",
      subtitle: "(capital + yield to investor)",
      icon: TrendingUp,
      delay: 0.6,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-gray-800 mb-8 max-w-4xl mx-auto leading-tight">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-noto-serif-ethiopic leading-relaxed">
              From purchase order to investor yield — a fast, secure, repeatable model that transforms manufacturing finance.
            </p>
          </motion.div>

          {/* Steps Container */}
          <div className="relative">
            {/* Enhanced Desktop Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0">
              <div className="h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-full shadow-sm"></div>
              <div className="absolute inset-0 h-1 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-full opacity-50 blur-sm"></div>
            </div>
            
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: step.delay, 
                    duration: 0.7, 
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="flex flex-col items-center group"
                >
                  <Card className="bg-gradient-to-br from-white to-gray-100 border-2 border-gray-200 w-full h-64 max-w-sm mx-auto shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-gray-400/50 backdrop-blur-sm">
                    <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                      <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: step.delay + 0.4, duration: 0.6, type: "spring" }}
                        className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-gray-600/70"
                      >
                        <step.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <h4 className="font-bold text-xl mb-3 font-montserrat leading-tight tracking-tight text-gray-800">
                        {step.title}
                      </h4>
                      <p className="text-base font-noto-serif-ethiopic opacity-70 leading-relaxed font-medium text-gray-600">
                        {step.subtitle}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Enhanced Mobile Connection Indicator */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden mt-8 mb-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0, rotate: -90 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: step.delay + 0.6, duration: 0.4, type: "spring" }}
                        className="w-8 h-8 text-gray-500"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                          <path d="M12 2L12 22M12 22L18 16M12 22L6 16"/>
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Bottom Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="text-center mt-20"
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 font-noto-serif-ethiopic leading-relaxed mb-6">
                Our streamlined process ensures efficient capital deployment and consistent returns for our limited partners through a proven, repeatable framework.
              </p>
              <div className="flex justify-center items-center space-x-6 text-sm text-gray-500 font-montserrat">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span>Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
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
