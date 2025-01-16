import { motion } from "framer-motion";

const partners = [
  {
    name: "Tyler Williams",
    role: "General Partner",
    bio: "Co-founder and Managing Partner at Ratchet Wealth Partners, focusing on early-stage technology investments. Experienced entrepreneur and investor with deep expertise in deal structuring and portfolio management. Strong track record of identifying and supporting high-growth potential companies in the Pacific Northwest technology ecosystem.",
  },
  {
    name: "Omar Marquez",
    role: "General Partner",
    bio: "Co-founder and Managing Partner at Ratchet Wealth Partners with extensive experience in technology and venture capital. Serial entrepreneur and strategic advisor specializing in SaaS, fintech, and enterprise software. Proven track record of scaling technology companies and building successful investment portfolios. Passionate about fostering innovation in the Portland startup ecosystem.",
  },
  {
    name: "Drew Leahy",
    role: "Managing Partner",
    bio: "Founding Partner at Hawke Ventures and accomplished venture capital investor. Previously led strategic investments at prominent firms and scaled multiple portfolio companies to successful exits. Graduate of University of Michigan with expertise in consumer technology, digital media, and emerging platforms. Deep experience in helping founders navigate rapid growth and market expansion.",
  },
];

export const Partners = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-sply-navy to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-sply-gold text-center mb-16">
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
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-sply-gold/20 to-sply-gold/10 flex items-center justify-center">
                <span className="text-4xl text-sply-gold font-serif">
                  {partner.name[0]}
                </span>
              </div>
              <h3 className="text-xl text-sply-gold mb-2">{partner.name}</h3>
              <p className="text-sply-offwhite mb-4">{partner.role}</p>
              <p className="text-sply-offwhite text-sm leading-relaxed text-left">
                {partner.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};