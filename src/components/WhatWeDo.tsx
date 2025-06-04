
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export const WhatWeDo = () => {
  console.log("WhatWeDo component is rendering");
  
  return (
    <section className="py-12" style={{backgroundColor: '#fafafa'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-800 mb-6 max-w-4xl mx-auto px-4">
              Our Approach
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sply-navy to-sply-gold mx-auto mb-8 rounded-full"></div>
            <h3 className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto px-4 font-noto-serif-ethiopic">
              Private credit that powers U.S. manufacturing by funding real purchase orders — fast, insured, and transparent.
            </h3>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            {/* Left Side - Problem/Solution */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <Card className="border-l-4 border-l-gray-400 bg-gray-50/80">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mt-1">
                      <Zap className="w-3 h-3 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm font-montserrat">The Challenge</h4>
                      <p className="text-gray-600 text-sm font-noto-serif-ethiopic">
                        Small vendors win big contracts — but lack the cash to fulfill them. Banks can't move fast enough.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-sply-gold" />
              </div>

              <Card className="border-l-4 border-l-sply-navy bg-white">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center mt-1">
                      <Shield className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm font-montserrat">Our Solution</h4>
                      <p className="text-gray-600 text-sm font-noto-serif-ethiopic">
                        SPLYFI bridges that gap — funding verified purchase orders from Fortune 1000 and government buyers.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Side - Value Proposition */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:pl-8"
            >
              <Card className="border-2 border-sply-navy bg-sply-navy text-white shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-sply-gold rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 font-montserrat">Proven Performance</h4>
                      <p className="text-gray-200 text-base leading-relaxed font-noto-serif-ethiopic">
                        Funding has enabled over 180 real-world transactions, accelerating U.S. production and generating 12%+ annualized yield.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="text-center p-4 bg-white/10 rounded-lg">
                      <div className="text-xl font-bold text-sply-gold font-montserrat">$31M+</div>
                      <div className="text-xs text-gray-300 font-noto-serif-ethiopic">Purchase Orders Financed</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-lg">
                      <div className="text-xl font-bold text-sply-gold font-montserrat">188</div>
                      <div className="text-xs text-gray-300 font-noto-serif-ethiopic">Transactions to Date</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-lg">
                      <div className="text-xl font-bold text-sply-gold font-montserrat">83 Days</div>
                      <div className="text-xs text-gray-300 font-noto-serif-ethiopic">Average PO Cycle</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
