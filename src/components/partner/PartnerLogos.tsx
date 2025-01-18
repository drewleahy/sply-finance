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
      <h3 className="text-2xl font-serif text-gray-900 text-center mb-8">
        {title}
      </h3>
      <div className={`grid ${gridCols} gap-8`}>
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-center p-4 bg-gray-50 rounded-lg h-24"
          >
            <img 
              src={partner.logo} 
              alt={partner.name}
              className="max-h-16 max-w-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};