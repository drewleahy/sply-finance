import { motion } from "framer-motion";

const thesisPoints = [
  {
    title: "VC Lead Off Market Private Investments",
    description:
      "Series A+ Deals in Defense, Aerospace, AI Hardware, Deeptech, Robotics, & Fintech",
    icon: "🚀",
  },
  {
    title: "Alternative Investments",
    description:
      "Opportunities in Alternatives & Investment Algorithms, for cash on cash returns",
    icon: "📈",
  },
  {
    title: "Early Stage Opportunities",
    description: "Early Stage Deals with Previously Exited Founders",
    icon: "💡",
  },
];

export const InvestmentThesis = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 text-center mb-16">
          Investment Thesis
        </h2>
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