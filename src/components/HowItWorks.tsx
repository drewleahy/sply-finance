
import { motion } from "framer-motion";
import { FileText, Shield, DollarSign, CheckCircle, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorks = () => {
  const steps = [
    {
      title: "PO Issued",
      subtitle: "(by F1000/Gov)",
      icon: FileText,
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 text-blue-900",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
      delay: 0,
    },
    {
      title: "Underwritten & Insured",
      subtitle: "(SPLYFI + Allianz)",
      icon: Shield,
      color: "bg-gradient-to-br from-blue-100 to-blue-150 border-blue-300 text-blue-900",
      iconBg: "bg-gradient-to-br from-blue-600 to-blue-700",
      delay: 0.15,
    },
    {
      title: "Capital Deployed",
      subtitle: "(to U.S. vendor)",
      icon: DollarSign,
      color: "bg-gradient-to-br from-blue-150 to-blue-200 border-blue-400 text-blue-900",
      iconBg: "bg-gradient-to-br from-blue-700 to-blue-800",
      delay: 0.3,
    },
    {
      title: "Order Fulfilled",
      subtitle: "(payment collected)",
      icon: CheckCircle,
      color: "bg-gradient-to-br from-blue-200 to-blue-300 border-blue-500 text-blue-900",
      iconBg: "bg-gradient-to-br from-blue-800 to-blue-900",
      delay: 0.45,
    },
    {
      title: "Yield Returned",
      subtitle: "(capital + yield to investor)",
      icon: TrendingUp,
      color: "bg-gradient-to-br from-blue-300 to-blue-400 border-blue-600 text-white",
      iconBg: "bg-gradient-to-br from-blue-900 to-blue-950",
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
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-noto-serif-ethiopic leading-relaxed">
              From purchase order to investor yield — a fast, secure, repeatable model that transforms manufacturing finance.
            </p>
          </motion.div>

          {/* Steps Container */}
          <div className="relative">
            {/* Enhanced Desktop Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0">
              <div className="h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 rounded-full shadow-sm"></div>
              <div className="absolute inset-0 h-1 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 rounded-full opacity-50 blur-sm"></div>
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
                  {/* Step Number with Enhanced Design */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: step.delay + 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
                    className="mb-8 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center text-lg font-bold font-montserrat shadow-lg shadow-blue-200 ring-4 ring-white group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-300 transition-all duration-300"
                  >
                    {index + 1}
                  </motion.div>

                  <Card className={`${step.color} border-2 w-full max-w-sm mx-auto shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 group-hover:-translate-y-3 backdrop-blur-sm`}>
                    <CardContent className="p-8 text-center">
                      <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: step.delay + 0.4, duration: 0.6, type: "spring" }}
                        className={`w-20 h-20 ${step.iconBg} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                      >
                        <step.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <h4 className="font-bold text-xl mb-3 font-montserrat leading-tight tracking-tight">
                        {step.title}
                      </h4>
                      <p className="text-base font-noto-serif-ethiopic opacity-90 leading-relaxed font-medium">
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
                        className="w-8 h-8 text-blue-500"
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
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span>Transparent</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
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
