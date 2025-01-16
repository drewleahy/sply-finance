import { motion } from "framer-motion";

const thesisPoints = [
  {
    title: "Market Opportunity",
    description: "U.S. manufacturing contributes $2.65 Trillion to GDP, accounting for over 10% of the nation's economic output.",
    icon: "📈",
  },
  {
    title: "Unprecedented Growth",
    description: "Manufacturing job creation has surged by 775,000 since 2021, backed by landmark legislative initiatives.",
    icon: "🏭",
  },
  {
    title: "Legislative Support",
    description: "Infrastructure Investment and Jobs Act, Inflation Reduction Act, and CHIPS Act provide critical industry backing.",
    icon: "📜",
  },
];

export const InvestmentThesis = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 text-center mb-8">
          Why Invest in Trade Financing?
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          American manufacturing is experiencing a resurgence, driven by increased infrastructure investment, job growth, and advanced technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {thesisPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl text-gray-800 mb-4">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};