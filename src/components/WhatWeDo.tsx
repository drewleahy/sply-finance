
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, AlertCircle, Target, Trophy, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export const WhatWeDo = () => {
  console.log("WhatWeDo component is rendering");
  
  return (
    <section className="py-20" style={{backgroundColor: '#fafafa'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-800 mb-6 max-w-4xl mx-auto px-4">
              Our Approach
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sply-navy to-sply-gold mx-auto mb-8 rounded-full"></div>
            <h3 className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto px-4 font-noto-serif-ethiopic">
              Private credit that powers U.S. manufacturing by funding real purchase orders — fast, insured, and transparent.
            </h3>
          </motion.div>

          {/* Challenge - Solution Flow */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* The Challenge */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <Card className="pt-8 bg-gradient-to-br from-red-50 to-orange-50 border-red-200 shadow-lg">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 font-montserrat">The Challenge</h4>
                    <p className="text-gray-700 leading-relaxed font-noto-serif-ethiopic">
                      Small vendors win big contracts — but lack the cash to fulfill them. Banks can't move fast enough.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Arrow */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-center"
              >
                <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2">
                  <ArrowRight className="w-8 h-8 text-sply-gold transform lg:rotate-0 rotate-90" />
                  <span className="text-sm font-montserrat text-gray-600 font-medium">SOLUTION</span>
                </div>
              </motion.div>

              {/* Our Solution */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <Card className="pt-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 font-montserrat">Our Solution</h4>
                    <p className="text-gray-700 leading-relaxed font-noto-serif-ethiopic">
                      SPLYFI bridges that gap — funding verified purchase orders from Fortune 1000 and government buyers.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Proven Performance Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-sply-navy to-sply-gold rounded-full flex items-center justify-center shadow-xl">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            
            <Card className="pt-12 bg-gradient-to-br from-sply-navy via-gray-800 to-sply-navy text-white shadow-2xl border-0">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 font-montserrat">Proven Performance</h3>
                  <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-noto-serif-ethiopic">
                    Funding has enabled over 180 real-world transactions, accelerating U.S. production and generating 12%+ annualized yield.
                  </p>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center group"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 group-hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-sply-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-sply-gold mb-2 font-montserrat">$31M+</div>
                      <div className="text-gray-300 font-noto-serif-ethiopic">Purchase Orders Financed</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-center group"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 group-hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-sply-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-sply-gold mb-2 font-montserrat">188</div>
                      <div className="text-gray-300 font-noto-serif-ethiopic">Transactions to Date</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center group"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 group-hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-sply-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertCircle className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-sply-gold mb-2 font-montserrat">83 Days</div>
                      <div className="text-gray-300 font-noto-serif-ethiopic">Average PO Cycle</div>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
