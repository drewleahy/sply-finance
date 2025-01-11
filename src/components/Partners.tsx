import { motion } from "framer-motion";

const partners = [
  {
    name: "Tyler Williams",
    role: "General Partner",
  },
  {
    name: "Omar Marquez",
    role: "General Partner",
  },
  {
    name: "Drew Leahy",
    role: "General Partner",
  },
];

export const Partners = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-luxon-navy to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-luxon-gold text-center mb-16">
          General Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-luxon-gold/20 to-luxon-gold/10 flex items-center justify-center">
                <span className="text-4xl text-luxon-gold font-serif">
                  {partner.name[0]}
                </span>
              </div>
              <h3 className="text-xl text-luxon-gold mb-2">{partner.name}</h3>
              <p className="text-luxon-muted">{partner.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};