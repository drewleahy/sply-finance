import { motion } from "framer-motion";

const portfolioLogos = [
  {
    name: "Tech Ventures",
    logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=100",
  },
  {
    name: "Defense Innovation",
    logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=100",
  },
  {
    name: "Aerospace Solutions",
    logo: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80&w=100",
  },
];

export const Portfolio = () => {
  return (
    <section className="py-20 bg-sply-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-sply-offwhite mb-16">
          Portfolio Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
          {portfolioLogos.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="w-32 h-32 relative group"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-sply-gold/10 group-hover:bg-transparent transition-all duration-300" />
              <p className="absolute bottom-0 left-0 right-0 text-center text-sply-offwhite bg-sply-navy/90 py-2 text-sm">
                {company.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};