
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Shield, DollarSign, CheckCircle, Building, FileText, Package, PieChart, ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Verified Purchase Order Issued",
    description: "Government agencies and Fortune 1000 companies issue verified purchase orders",
    icon: Building,
    color: "text-sply-navy",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    title: "SPLYFI Underwrites & Applies Insurance",
    description: "Comprehensive due diligence with third-party insurance backing",
    icon: Shield,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    id: 3,
    title: "Capital Deployed to Vendor",
    description: "Fast funding enables immediate production and fulfillment",
    icon: DollarSign,
    color: "text-sply-gold",
    bgColor: "bg-yellow-100",
  },
  {
    id: 4,
    title: "Order Fulfilled, Payment Collected",
    description: "Products delivered, contracts executed, payment received from buyer",
    icon: Package,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    id: 5,
    title: "Yield & Principal Returned to Investors",
    description: "Attractive returns distributed, capital ready for redeployment",
    icon: PieChart,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
];

export const PurchaseOrderLifecycle = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const handleStepClick = (index: number) => {
    setIsAnimating(false);
    setActiveStep(index);
    // Resume animation after 10 seconds of inactivity
    setTimeout(() => setIsAnimating(true), 10000);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-sply-navy mb-4">
            How SPLYFI Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A transparent, efficient cycle that transforms purchase orders into predictable yields
          </p>
        </motion.div>

        {/* Desktop Timeline View */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-16 left-0 w-full h-1 bg-gray-200 rounded-full">
              <motion.div
                className="h-full bg-sply-gold rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = index === activeStep;
                const isPast = index < activeStep;

                return (
                  <motion.div
                    key={step.id}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => handleStepClick(index)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Step Circle */}
                    <motion.div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 transition-all duration-500 ${
                        isActive
                          ? `${step.bgColor} border-sply-gold shadow-lg`
                          : isPast
                          ? "bg-sply-gold border-sply-gold"
                          : "bg-white border-gray-300"
                      }`}
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        rotate: isActive ? 360 : 0,
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <IconComponent
                        className={`w-8 h-8 transition-colors duration-500 ${
                          isActive ? step.color : isPast ? "text-white" : "text-gray-400"
                        }`}
                      />
                    </motion.div>

                    {/* Step Content */}
                    <motion.div
                      className="text-center max-w-48"
                      animate={{
                        opacity: isActive ? 1 : 0.6,
                        y: isActive ? 0 : 10,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="font-semibold text-sply-navy mb-2 text-sm leading-tight">
                        {step.title}
                      </h3>
                      <p className={`text-xs text-gray-600 transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-50"
                      }`}>
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Carousel View */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Step Indicators */}
            <div className="flex justify-center mb-8 space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeStep ? "bg-sply-gold" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Active Step Display */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className={`w-24 h-24 rounded-full ${steps[activeStep].bgColor} flex items-center justify-center mx-auto mb-6`}>
                {(() => {
                  const IconComponent = steps[activeStep].icon;
                  return <IconComponent className={`w-12 h-12 ${steps[activeStep].color}`} />;
                })()}
              </div>
              <h3 className="text-xl font-semibold text-sply-navy mb-4">
                {steps[activeStep].title}
              </h3>
              <p className="text-gray-600 max-w-sm mx-auto">
                {steps[activeStep].description}
              </p>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={() => handleStepClick((activeStep - 1 + steps.length) % steps.length)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ArrowRight className="w-5 h-5 text-gray-600 rotate-180" />
              </button>
              <span className="text-sm text-gray-500">
                {activeStep + 1} of {steps.length}
              </span>
              <button
                onClick={() => handleStepClick((activeStep + 1) % steps.length)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Average cycle time: <span className="font-semibold text-sply-navy">83 days</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-sply-navy hover:bg-sply-navy/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More About Our Process
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-sply-gold text-sply-gold hover:bg-sply-gold hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Historical Performance
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
