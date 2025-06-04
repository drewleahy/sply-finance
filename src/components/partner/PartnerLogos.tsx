
import { motion } from "framer-motion";

interface LogoProps {
  name: string;
  logo: string;
}

interface PartnerLogosProps {
  title: string;
  partners: LogoProps[];
  variant?: "infrastructure" | "enterprise";
}

export const PartnerLogos = ({ title, partners, variant = "infrastructure" }: PartnerLogosProps) => {
  const isInfrastructure = variant === "infrastructure";
  
  return (
    <div className="mb-20">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xs md:text-sm font-montserrat font-medium text-gray-500 text-center mb-12 uppercase tracking-[0.2em] letterspacing-wide"
      >
        {title}
      </motion.h3>
      
      {isInfrastructure ? (
        // Infrastructure partners in a clean horizontal row
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-6 md:h-8 max-w-[120px] md:max-w-[140px] object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-90 transition-all duration-500 hover:scale-105" 
              />
            </motion.div>
          ))}
        </div>
      ) : (
        // Enterprise customers in a more spacious grid
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 md:gap-8 items-center justify-items-center max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="flex items-center justify-center p-4"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-5 md:h-7 max-w-[100px] md:max-w-[120px] object-contain filter grayscale opacity-50 hover:grayscale-0 hover:opacity-80 transition-all duration-500 hover:scale-105" 
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
