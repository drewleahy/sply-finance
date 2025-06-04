
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
    <div className="mb-24">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl md:text-2xl font-montserrat font-bold text-sply-navy text-center mb-12"
      >
        {title}
      </motion.h3>
      <div className={`grid ${gridCols} gap-6 md:gap-8`}>
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-20 md:h-24 border border-gray-100 hover:border-gray-200"
          >
            <img 
              src={partner.logo} 
              alt={partner.name}
              className="max-h-12 md:max-h-14 max-w-full object-contain mx-auto filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105" 
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
