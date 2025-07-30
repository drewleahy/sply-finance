
import { motion } from "framer-motion";
import { FileText, Shield, DollarSign, CheckCircle, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorks = () => {
  const steps = [
    {
      title: "Receivable Issued",
      subtitle: "(By Fortune 1000 or Government Buyer)",
      description: "The vendor delivers goods or services and issues a verified invoice to a creditworthy customer.",
      icon: FileText,
      delay: 0,
    },
    {
      title: "Receivable Underwritten",
      subtitle: "(SPLYFI + Partners)",
      description: "The receivable is reviewed for credit quality, terms, and counterparty risk using institutional-grade underwriting standards.",
      icon: Shield,
      delay: 0.15,
    },
    {
      title: "Capital Deployed",
      subtitle: "(To U.S. Vendor)",
      description: "SPLYFI advances funds to the vendor, freeing up working capital while they wait for payment.",
      icon: DollarSign,
      delay: 0.3,
    },
    {
      title: "Payment Collected",
      subtitle: "(From Buyer)",
      description: "The buyer remits payment directly to SPLYFI at invoice maturity, typically within 30–90 days.",
      icon: CheckCircle,
      delay: 0.45,
    },
    {
      title: "Yield Returned",
      subtitle: "(Principal + Yield to Investors)",
      description: "Investors receive their principal and earned yield, completing a short-duration, repeatable financing cycle.",
      icon: TrendingUp,
      delay: 0.6,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-gray-800 mb-4 sm:mb-6 max-w-4xl mx-auto px-4">
              How It Works
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-sply-navy to-sply-gold mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto font-noto-serif-ethiopic leading-relaxed px-2">
              From invoice to investor yield — a streamlined, reliable model redefining manufacturing finance.
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-4 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    ease: "easeOut"
                  }}
                  className="flex flex-col items-center"
                >
                  <Card className="bg-gradient-to-br from-white to-gray-100 border-2 border-gray-200 w-full min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] max-w-xs mx-auto shadow-lg">
                    <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col justify-between">
                      <div>
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                          <step.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                        </div>
                        <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 font-montserrat leading-tight tracking-tight text-gray-800">
                          {step.title}
                        </h4>
                        <p className="text-sm sm:text-base font-noto-serif-ethiopic opacity-70 leading-relaxed font-medium text-gray-600 mb-3">
                          {step.subtitle}
                        </p>
                      </div>
                      <p className="text-xs sm:text-sm font-noto-serif-ethiopic text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Mobile Connection Indicator */}
                  {index < steps.length - 1 && (
                    <div className="sm:hidden lg:hidden mt-4 mb-2">
                      <div className="w-5 h-5 text-gray-500">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M12 2L12 22M12 22L18 16M12 22L6 16"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center mt-12 sm:mt-16 lg:mt-20"
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg text-gray-600 font-noto-serif-ethiopic leading-relaxed mb-4 sm:mb-6 px-2">
                Our streamlined process ensures efficient capital deployment and consistent returns for our limited partners through a proven, repeatable framework.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base lg:text-lg text-gray-500 font-montserrat">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gray-500 rounded-full"></div>
                  <span>Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gray-600 rounded-full"></div>
                  <span>Transparent</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gray-700 rounded-full"></div>
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
