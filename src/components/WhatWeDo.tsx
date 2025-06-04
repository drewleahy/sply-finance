
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, TrendingUp, Target } from "lucide-react";
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
          <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-24">
            {/* Left Side - Problem/Solution Flow */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-3 flex flex-col"
            >
              {/* The Opportunity - New First Block */}
              <Card className="border-l-4 border-l-sply-gold bg-gradient-to-r from-sply-gold/5 to-transparent transition-all duration-300 hover:shadow-lg hover:scale-105 hover:from-sply-gold/10 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-sply-gold rounded-full flex items-center justify-center mt-1 transition-transform duration-300 group-hover:scale-110">
                      <Target className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm font-montserrat">The Opportunity</h4>
                      <p className="text-gray-600 text-sm font-noto-serif-ethiopic">
                        American suppliers are receiving more purchase orders than ever — but capital isn't keeping up. 
                        Rising demand from defense and infrastructure projects is creating a financing gap across U.S. manufacturing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center py-1">
                <ArrowRight className="w-5 h-5 text-sply-gold" />
              </div>

              <Card className="border-l-4 border-l-gray-400 bg-gray-50/80 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-gray-100/90 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mt-1 transition-all duration-300 hover:bg-gray-300">
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

              <div className="flex justify-center py-1">
                <ArrowRight className="w-5 h-5 text-sply-gold" />
              </div>

              <Card className="border-l-4 border-l-sply-navy bg-white transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-gray-50/50 cursor-pointer flex-grow">
                <CardContent className="p-4 h-full flex flex-col">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center mt-1 transition-all duration-300 hover:bg-sply-navy">
                      <Shield className="w-3 h-3 text-white" />
                    </div>
                    <div className="flex-grow">
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
              className="lg:pl-8 flex"
            >
              <Card className="border-2 border-sply-navy bg-sply-navy text-white shadow-2xl flex-grow flex flex-col">
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Header with Icon */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-sply-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3 font-montserrat">Proven Performance</h4>
                      <p className="text-gray-200 text-lg leading-relaxed font-noto-serif-ethiopic">
                        Funding has enabled over 180 real-world transactions, accelerating U.S. production and generating 12%+ annualized yield.
                      </p>
                    </div>
                  </div>
                  
                  {/* Statistics Grid */}
                  <div className="grid grid-cols-1 gap-6 mt-auto">
                    <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20">
                      <div className="text-3xl font-bold text-sply-gold font-montserrat mb-2">$31M+</div>
                      <div className="text-sm text-gray-300 font-noto-serif-ethiopic uppercase tracking-wide">Purchase Orders Financed</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20">
                        <div className="text-2xl font-bold text-sply-gold font-montserrat mb-2">188</div>
                        <div className="text-xs text-gray-300 font-noto-serif-ethiopic uppercase tracking-wide">Transactions to Date</div>
                      </div>
                      <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20">
                        <div className="text-2xl font-bold text-sply-gold font-montserrat mb-2">83 Days</div>
                        <div className="text-xs text-gray-300 font-noto-serif-ethiopic uppercase tracking-wide">Average PO Cycle</div>
                      </div>
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
