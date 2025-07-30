
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export const TeamAlpha = () => {
  const alphaPoints = [
    "Portfolio Management, Quarterly Presentations, and Allocation Recommendations for Families",
    "Private credit allocation assessment by our expert team",
    "Credit underwriting QA & procedures for family offices on a deal by deal basis",
    "Portal reporting & allocation based on expertise of family or thesis necessity",
    "GPs source SM / High Tech Corporations from our network for high impact / high reward deals"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-sply-navy font-montserrat">
          How Our Team Drives Alpha
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {alphaPoints.map((point, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex items-start gap-4"
            >
              <Check className="w-6 h-6 text-sply-gold flex-shrink-0 mt-1" />
              <p className="text-lg text-sply-navy font-noto-serif-ethiopic">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
