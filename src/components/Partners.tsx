import { motion } from "framer-motion";

const partners = [
  {
    name: "Tyler Williams",
    role: "General Partner",
    bio: "Experienced investor and entrepreneur with a focus on early-stage technology companies. Previously founded and scaled multiple successful ventures in the Pacific Northwest. Graduate of Portland State University with expertise in business development and strategic partnerships. Passionate about supporting founders in their journey from concept to scale.",
  },
  {
    name: "Omar Marquez",
    role: "General Partner",
    bio: "Seasoned technology executive and investor with over 15 years of experience in software development and entrepreneurship. Former CTO of multiple successful startups and active angel investor in the Portland tech ecosystem. Strong background in enterprise software, cloud infrastructure, and emerging technologies. Committed to fostering innovation and supporting diverse founding teams.",
  },
  {
    name: "Drew Leahy",
    role: "Managing Partner",
    bio: "Accomplished investor and business strategist with extensive experience in venture capital and startup operations. Previously led investments and portfolio companies at prominent venture firms. Graduate of University of Oregon with deep expertise in financial modeling, market analysis, and growth strategy. Dedicated to helping founders build category-defining companies.",
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