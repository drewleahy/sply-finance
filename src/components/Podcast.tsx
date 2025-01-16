import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const Podcast = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <img
              src="/lovable-uploads/60e34ccc-38dc-4beb-af89-8a5458fab824.png"
              alt="Family Monies Podcast"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Family Monies Podcast
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Join us as we explore the world of family offices, alternative
              investments, and exclusive opportunities. Listen to our latest
              episodes featuring industry leaders and successful founders.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold"
                onClick={() => window.open("https://familymonies.com", "_blank")}
              >
                Listen Now
              </Button>
              <Button
                className="bg-transparent hover:bg-gray-100 text-gray-800 border-2 border-gray-800 font-semibold"
                onClick={() => window.open("https://familymonies.com/speaker", "_blank")}
              >
                Join FM As A Speaker
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};