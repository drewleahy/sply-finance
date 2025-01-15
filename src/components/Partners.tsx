import { motion } from "framer-motion";

const partners = [
  {
    name: "Tyler Williams",
    role: "General Partner",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    name: "Omar Marquez",
    role: "General Partner",
    bio: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  },
  {
    name: "Drew Leahy",
    role: "General Partner",
    bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
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