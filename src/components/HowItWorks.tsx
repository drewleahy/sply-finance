
import { motion } from "framer-motion";
import { FileText, Shield, DollarSign, CheckCircle, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorks = () => {
  const steps = [
    {
      title: "PO Issued",
      subtitle: "(by F1000/Gov)",
      icon: FileText,
      color: "bg-blue-50 border-blue-200 text-blue-900",
      iconBg: "bg-blue-600",
      delay: 0,
    },
    {
      title: "Underwritten & Insured",
      subtitle: "(SPLYFI + Allianz)",
      icon: Shield,
      color: "bg-blue-100 border-blue-300 text-blue-900",
      iconBg: "bg-blue-700",
      delay: 0.2,
    },
    {
      title: "Capital Deployed",
      subtitle: "(to U.S. vendor)",
      icon: DollarSign,
      color: "bg-blue-200 border-blue-400 text-blue-900",
      iconBg: "bg-blue-800",
      delay: 0.4,
    },
    {
      title: "Order Fulfilled",
      subtitle: "(payment collected)",
      icon: CheckCircle,
      color: "bg-blue-300 border-blue-500 text-blue-900",
      iconBg: "bg-blue-900",
      delay: 0.6,
    },
    {
      title: "Yield Returned",
      subtitle: "(capital + yield to investor)",
      icon: TrendingUp,
      color: "bg-blue-400 border-blue-600 text-white",
      iconBg: "bg-blue-950",
      delay: 0.8,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-gray-800 mb-6 max-w-4xl mx-auto px-4">
              How It Works
            </h2>
            <h3 className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto px-4 font-noto-serif-ethiopic">
              From purchase order to investor yield — a fast, secure, repeatable model.
            </h3>
          </div>

          {/* Steps Container */}
          <div className="relative">
            {/* Desktop Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 transform -translate-y-1/2 z-0"></div>
            
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: step.delay, duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center group"
                >
                  {/* Step Number */}
                  <div className="mb-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold font-montserrat lg:mb-6">
                    {index + 1}
                  </div>

                  <Card className={`${step.color} border-2 w-full max-w-xs mx-auto hover:shadow-xl hover:scale-105 transition-all duration-300 group-hover:-translate-y-2`}>
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 ${step.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-lg mb-2 font-montserrat leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-sm font-noto-serif-ethiopic opacity-80 leading-relaxed">
                        {step.subtitle}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Mobile Connection Indicator */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden mt-6 mb-2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: step.delay + 0.3, duration: 0.3 }}
                        className="w-6 h-6 text-blue-500"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M12 2L12 22M12 22L18 16M12 22L6 16"/>
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA or Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 font-noto-serif-ethiopic max-w-2xl mx-auto">
              Our streamlined process ensures efficient capital deployment and consistent returns for our limited partners.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
