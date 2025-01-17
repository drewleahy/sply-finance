import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const InvestmentFlow = () => {
  const boxes = [
    {
      title: "Limited Partners",
      color: "bg-emerald-100 border-emerald-200",
      delay: 0,
    },
    {
      title: "SPLYCAP",
      color: "bg-blue-100 border-blue-200",
      delay: 0.2,
    },
    {
      title: "Technology",
      color: "bg-indigo-100 border-indigo-200",
      delay: 0.4,
    },
    {
      title: "Fortune 1000 & Government PO's",
      color: "bg-orange-100 border-orange-200",
      delay: 0.6,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 text-center mb-16">
          How It Works
        </h2>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
          {/* Mobile Arrow (visible only on mobile) */}
          <div className="absolute h-full w-2 bg-green-600 md:hidden" style={{ left: '50%', transform: 'translateX(-50%)', zIndex: 0 }}>
            <div className="absolute bottom-0 left-1/2 w-4 h-4 border-b-2 border-r-2 border-green-600 transform rotate-45 translate-x-[-50%] translate-y-[6px]"></div>
          </div>
          
          {boxes.map((box, index) => (
            <div key={index} className="flex items-center relative z-10 w-full md:w-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: box.delay }}
                className={`${box.color} p-4 rounded-lg border shadow-sm min-w-[180px] w-full md:w-auto text-center bg-opacity-100`}
              >
                <p className="font-medium text-gray-800">{box.title}</p>
              </motion.div>
              {index < boxes.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: box.delay + 0.1 }}
                  className="hidden md:block ml-4"
                >
                  <ArrowRight className="text-green-600 w-6 h-6" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};