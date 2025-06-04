
import { motion } from "framer-motion";

interface LogoProps {
  name: string;
  logo: string;
}

interface PartnerLogosProps {
  title: string;
  partners: LogoProps[];
  gridCols?: string;
}

export const PartnerLogos = ({ title, partners, gridCols = "grid-cols-2 md:grid-cols-3 lg:grid-cols-6" }: PartnerLogosProps) => {
  return (
    <div className="mb-16">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm md:text-base font-montserrat font-semibold text-sply-navy/80 text-center mb-8 uppercase tracking-wider"
      >
        {title}
      </motion.h3>
      <div className={`grid ${gridCols} gap-4 md:gap-6`}>
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="group flex items-center justify-center p-3 md:p-4 bg-white/70 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-16 md:h-18 border border-gray-100/80 hover:border-gray-200/80 backdrop-blur-sm"
          >
            <img 
              src={partner.logo} 
              alt={partner.name}
              className="max-h-8 md:max-h-10 max-w-full object-contain mx-auto filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105" 
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
