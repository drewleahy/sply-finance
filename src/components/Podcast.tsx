import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const Podcast = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-luxon-navy">
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
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-luxon-gold mb-6">
              Family Monies Podcast
            </h2>
            <p className="text-luxon-muted mb-8">
              Join us as we explore the world of family offices, alternative
              investments, and exclusive opportunities. Listen to our latest
              episodes featuring industry leaders and successful founders.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-luxon-gold hover:bg-luxon-gold/90 text-luxon-navy"
                onClick={() => window.open("https://familymonies.com", "_blank")}
              >
                Listen Now
              </Button>
              <Button
                className="bg-luxon-navy hover:bg-luxon-navy/90 text-luxon-gold border border-luxon-gold"
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