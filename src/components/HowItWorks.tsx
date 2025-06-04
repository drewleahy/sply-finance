
import { motion } from "framer-motion";
import { FileText, Shield, DollarSign, CheckCircle, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorks = () => {
  const steps = [
    {
      title: "PO Issued",
      subtitle: "(by F1000/Gov)",
      icon: FileText,
      color: "bg-blue-100 border-blue-200 text-blue-700",
      iconBg: "bg-blue-700",
      delay: 0,
    },
    {
      title: "Underwritten & Insured",
      subtitle: "(SPLYFI + Allianz)",
      icon: Shield,
      color: "bg-green-100 border-green-200 text-green-700",
      iconBg: "bg-green-700",
      delay: 0.2,
    },
    {
      title: "Capital Deployed",
      subtitle: "(to U.S. vendor)",
      icon: DollarSign,
      color: "bg-sply-gold/20 border-sply-gold text-sply-navy",
      iconBg: "bg-sply-gold",
      delay: 0.4,
    },
    {
      title: "Order Fulfilled",
      subtitle: "(payment collected)",
      icon: CheckCircle,
      color: "bg-purple-100 border-purple-200 text-purple-700",
      iconBg: "bg-purple-700",
      delay: 0.6,
    },
    {
      title: "Yield Returned",
      subtitle: "(capital + yield to investor)",
      icon: TrendingUp,
      color: "bg-sply-navy/10 border-sply-navy text-sply-navy",
      iconBg: "bg-sply-navy",
      delay: 0.8,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-gray-800 mb-6 max-w-4xl mx-auto px-4">
              How It Works
            </h2>
            <h3 className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto px-4 font-noto-serif-ethiopic">
              From purchase order to investor yield — a fast, secure, repeatable model.
            </h3>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: step.delay, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <Card className={`${step.color} border-2 w-full max-w-xs mx-auto hover:shadow-lg transition-shadow duration-300`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${step.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 font-montserrat">
                      {step.title}
                    </h4>
                    <p className="text-sm font-noto-serif-ethiopic opacity-80">
                      {step.subtitle}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: step.delay + 0.3, duration: 0.3 }}
                      className="w-8 h-8 text-gray-400"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                      </svg>
                    </motion.div>
                  </div>
                )}
                
                {/* Number indicator for mobile */}
                <div className="lg:hidden mt-4 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-600 font-montserrat">
                    {index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
