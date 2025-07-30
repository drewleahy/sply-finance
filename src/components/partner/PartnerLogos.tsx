
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
      <h3 className="text-sm md:text-base font-montserrat font-semibold text-sply-navy/80 text-center mb-8 uppercase tracking-wider">
        {title}
      </h3>
      <div className={`grid ${gridCols} gap-4 md:gap-6`}>
        {partners.map((partner, index) => (
          <div
            key={partner.name}
            className="group flex items-center justify-center p-4 md:p-5 bg-white/70 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-20 md:h-24 border border-gray-100/80 hover:border-gray-200/80 backdrop-blur-sm"
          >
            <img 
              src={partner.logo} 
              alt={partner.name}
              className="max-h-12 md:max-h-16 max-w-full object-contain mx-auto filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};
