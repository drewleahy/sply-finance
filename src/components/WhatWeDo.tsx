
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export const WhatWeDo = () => {
  console.log("WhatWeDo component is rendering");
  
  return (
    <section className="py-8" style={{backgroundColor: '#fafafa'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <h2 className="text-xl sm:text-2xl font-montserrat font-bold text-gray-800 mb-3 max-w-3xl mx-auto px-2 lg:px-4">
              Our Approach
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-sply-navy to-sply-gold mx-auto mb-4 rounded-full"></div>
            <h3 className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto px-2 lg:px-4 font-noto-serif-ethiopic">
              Private credit that powers U.S. manufacturing by funding real purchase orders — fast, insured, and transparent.
            </h3>
          </motion.div>

          {/* Vertical Flow - Problem to Solution */}
          <div className="space-y-4 mb-12">
            {/* The Opportunity */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <Card className="border-l-4 border-l-sply-gold bg-gradient-to-r from-sply-gold/10 to-transparent transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:from-sply-gold/15 cursor-pointer">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-7 h-7 bg-sply-gold text-white rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-800 mb-2 text-base font-montserrat">The Opportunity</h4>
                      <p className="text-gray-600 text-sm font-noto-serif-ethiopic leading-relaxed">
                        American suppliers are receiving more purchase orders than ever — but capital isn't keeping up. 
                        Rising demand from defense and infrastructure projects is creating a financing gap across U.S. manufacturing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex justify-center py-2">
                <ArrowDown className="w-5 h-5 text-sply-gold" />
              </div>
            </motion.div>

            {/* The Challenge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="relative"
            >
              <Card className="border-l-4 border-l-gray-400 bg-gray-50/80 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-100/90 cursor-pointer">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-800 mb-2 text-base font-montserrat">The Challenge</h4>
                      <p className="text-gray-600 text-sm font-noto-serif-ethiopic leading-relaxed">
                        Small vendors win big contracts — but lack the cash to fulfill them. Banks can't move fast enough.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex justify-center py-2">
                <ArrowDown className="w-5 h-5 text-sply-gold" />
              </div>
            </motion.div>

            {/* Our Solution */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Card className="border-l-4 border-l-sply-navy bg-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50/50 cursor-pointer">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-7 h-7 bg-sply-navy text-white rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-800 mb-2 text-base font-montserrat">Our Solution</h4>
                      <p className="text-gray-600 text-sm font-noto-serif-ethiopic leading-relaxed">
                        SPLYFI bridges that gap — funding verified purchase orders from Fortune 1000 and government buyers.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Performance Highlight Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {/* Connecting line */}
            <div className="flex justify-center mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-sply-gold to-sply-navy rounded-full"></div>
            </div>
            
            <Card className="border-2 border-sply-navy bg-sply-navy text-white shadow-2xl">
              <CardContent className="p-6 lg:p-8">
                {/* Header with Icon */}
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-sply-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl lg:text-2xl font-bold mb-3 font-montserrat">Proven Performance</h4>
                  <p className="text-gray-200 text-sm lg:text-base leading-relaxed font-noto-serif-ethiopic max-w-xl mx-auto">
                    Funding has enabled over 180 real-world transactions, accelerating U.S. production and generating 12%+ annualized yield built with safety and transparency.
                  </p>
                </div>
                
                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="text-2xl lg:text-3xl font-bold text-sply-gold font-montserrat mb-1">$31M+</div>
                    <div className="text-xs text-gray-300 font-noto-serif-ethiopic uppercase tracking-wide">Purchase Orders Financed</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="text-2xl lg:text-3xl font-bold text-sply-gold font-montserrat mb-1">188</div>
                    <div className="text-xs text-gray-300 font-noto-serif-ethiopic uppercase tracking-wide">Transactions to Date</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="text-2xl lg:text-3xl font-bold text-sply-gold font-montserrat mb-1">83 Days</div>
                    <div className="text-xs text-gray-300 font-noto-serif-ethiopic uppercase tracking-wide">Average PO Cycle</div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-xs italic mt-4 font-noto-serif-ethiopic text-center">
                  As of data collected November 2023 – March 2025
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
