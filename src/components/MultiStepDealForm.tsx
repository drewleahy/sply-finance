
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { DealSubmissionForm } from "./DealSubmissionForm";

const steps = [
  {
    id: 1,
    title: "Company Information",
    description: "Tell us about your company",
  },
  {
    id: 2,
    title: "Founder Details",
    description: "Share your background",
  },
  {
    id: 3,
    title: "Investment Details",
    description: "What are you looking for?",
  },
];

export const MultiStepDealForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl font-noto-serif-ethiopic">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sply-navy mb-2 font-montserrat">Submit a Deal</h1>
        <p className="text-sply-muted font-noto-serif-ethiopic">
          Share your startup with potential investors
        </p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex-1 relative ${
                step.id !== steps.length && "after:content-[''] after:absolute after:w-full after:h-1 after:bg-gray-200 after:top-1/2 after:left-1/2 after:-translate-y-1/2"
              }`}
            >
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-montserrat ${
                    step.id <= currentStep
                      ? "bg-sply-gold text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step.id}
                </div>
                <div className="mt-2 text-sm text-center hidden md:block">
                  <div className="font-medium font-montserrat">{step.title}</div>
                  <div className="text-luxon-muted text-xs font-noto-serif-ethiopic">
                    {step.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Card className="p-6">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <DealSubmissionForm />
        </motion.div>

        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="font-montserrat"
          >
            Back
          </Button>
          <Button 
            onClick={handleNext} 
            disabled={currentStep === steps.length}
            className="font-montserrat"
          >
            {currentStep === steps.length ? "Submit" : "Next"}
          </Button>
        </div>
      </Card>
    </div>
  );
};
