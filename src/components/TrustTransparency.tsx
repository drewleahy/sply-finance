
import { motion } from "framer-motion";
import { Shield, CheckCircle, FileCheck, Users, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const TrustTransparency = () => {
  const trustFeatures = [
    {
      title: "Allianz-backed Insurance",
      icon: Shield,
      description: "Industry-leading coverage protecting your investment",
      delay: 0,
    },
    {
      title: "Stripe Verification",
      icon: CheckCircle,
      description: "Bank-grade security and compliance standards",
      delay: 0.1,
    },
    {
      title: "Moss Adams Audit",
      icon: FileCheck,
      description: "Independent third-party financial verification",
      delay: 0.2,
    },
    {
      title: "SPV Structure: \"You Hold the Note\"",
      icon: Users,
      description: "Direct ownership with transparent legal structure",
      delay: 0.3,
    },
    {
      title: "Monthly LP Dashboards",
      icon: BarChart3,
      description: "Real-time performance tracking and reporting",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-gray-800 mb-6 max-w-4xl mx-auto px-4">
              Built for Safety. Designed for Transparency.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sply-navy to-sply-gold mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-noto-serif-ethiopic leading-relaxed">
              Your investment security is our priority. Every layer of protection is designed to ensure complete transparency and institutional-grade safety.
            </p>
          </motion.div>

          {/* Trust Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: feature.delay, 
                  duration: 0.7, 
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="group"
              >
                <Card className="bg-white border-2 border-gray-200 h-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-sply-navy/20">
                  <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: feature.delay + 0.3, duration: 0.6, type: "spring" }}
                      className="w-16 h-16 bg-gradient-to-br from-sply-navy to-sply-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg"
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h4 className="font-bold text-lg mb-3 font-montserrat leading-tight text-gray-800">
                      {feature.title}
                    </h4>
                    <p className="text-sm font-noto-serif-ethiopic text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-sply-navy to-gray-800 rounded-2xl p-8 text-white shadow-2xl">
              <h4 className="text-xl font-bold mb-4 font-montserrat">
                Institutional-Grade Protection
              </h4>
              <p className="text-lg font-noto-serif-ethiopic leading-relaxed opacity-90">
                Every investment is protected by multiple layers of security, verification, and oversight — giving you the confidence to invest with complete peace of mind.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
