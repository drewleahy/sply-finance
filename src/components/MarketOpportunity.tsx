
import { motion } from "framer-motion";
import { TrendingUp, Shield, DollarSign, Building2 } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: "Alternatives", value: 41 },
  { name: "Equities", value: 29 },
  { name: "Real Estate", value: 9 },
  { name: "Cash", value: 8 },
  { name: "Bonds", value: 6 },
  { name: "Other", value: 7 },
];

const COLORS = ['#C5A572', '#1A1F2C', '#8E9196', '#33C3F0', '#2d3748', '#4a5568'];

export const MarketOpportunity = () => {
  const marketDrivers = [
    {
      title: "Surge in Defense & Infrastructure Spending",
      icon: Building2,
      description: "Government contracts driving unprecedented demand for manufacturing capacity",
      delay: 0,
    },
    {
      title: "Pullback in Bank Lending",
      icon: Shield,
      description: "Traditional lenders tightening credit, creating opportunity gaps",
      delay: 0.1,
    },
    {
      title: "$3.5T+ Trade Finance Gap",
      icon: DollarSign,
      description: "Massive global shortage in trade financing solutions",
      delay: 0.2,
    },
  ];

  return (
    <section className="py-24 bg-white">
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
              Market Opportunity
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sply-navy to-sply-gold mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-noto-serif-ethiopic leading-relaxed">
              Multiple macro trends are creating an unprecedented opportunity in private credit markets.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Side - Market Drivers */}
            <div className="space-y-8">
              {marketDrivers.map((driver, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: driver.delay, 
                    duration: 0.7, 
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="group"
                >
                  <Card className="bg-gray-50 border-l-4 border-l-sply-navy hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div 
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ delay: driver.delay + 0.3, duration: 0.6, type: "spring" }}
                          className="w-12 h-12 bg-gradient-to-br from-sply-navy to-sply-gold rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg"
                        >
                          <driver.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg mb-2 font-montserrat text-gray-800">
                            {driver.title}
                          </h4>
                          <p className="text-gray-600 font-noto-serif-ethiopic leading-relaxed">
                            {driver.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Right Side - Chart Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="lg:pl-8"
            >
              <Card className="bg-gradient-to-br from-sply-navy to-gray-800 text-white shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <TrendingUp className="w-12 h-12 text-sply-gold mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2 font-montserrat">
                      Portfolio Allocation Shift
                    </h3>
                    <p className="text-gray-200 font-noto-serif-ethiopic">
                      High-net-worth investors are reallocating to alternatives
                    </p>
                  </div>
                  
                  <div className="h-[280px] w-full mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={data}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, value }) => `${name} ${value}%`}
                        >
                          {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="text-center">
                    <div className="text-4xl font-bold text-sply-gold mb-2 font-montserrat">41%</div>
                    <div className="text-lg text-gray-200 font-noto-serif-ethiopic mb-2">of HNW portfolios now in alternatives</div>
                    <div className="text-xs text-gray-400">
                      Source:{" "}
                      <a 
                        href="https://www.barrons.com/articles/alternative-investments-super-rich-marinas-whiskey-1f4035af" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sply-gold hover:underline"
                      >
                        Barron's
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Bottom Call to Action - Simplified Format */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <h4 className="text-xl font-bold mb-4 font-montserrat text-gray-800">
                The Perfect Storm for Private Credit
              </h4>
              <p className="text-lg font-noto-serif-ethiopic leading-relaxed text-gray-600">
                As traditional financing shrinks and infrastructure spending surges, SPLYFI positions you at the center of this massive market opportunity — with institutional-grade protection and transparency.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
