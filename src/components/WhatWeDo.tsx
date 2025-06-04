
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export const WhatWeDo = () => {
  console.log("WhatWeDo component is rendering");
  
  return (
    <section className="py-8" style={{backgroundColor: '#fafafa'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-8 lg:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-gray-800 mb-3 lg:mb-4 max-w-4xl mx-auto px-2 lg:px-4">
              Our Approach
            </h2>
            <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-sply-navy to-sply-gold mx-auto mb-4 lg:mb-6 rounded-full"></div>
            <h3 className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 lg:mb-6 max-w-3xl mx-auto px-2 lg:px-4 font-noto-serif-ethiopic">
              Private credit that powers U.S. manufacturing by funding real purchase orders — fast, insured, and transparent.
            </h3>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-12 lg:mb-16">
            {/* Left Side - Problem/Solution Flow */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-1.5 lg:space-y-2 flex flex-col"
            >
              {/* The Opportunity - New First Block */}
              <Card className="border-l-4 border-l-sply-gold bg-gradient-to-r from-sply-gold/5 to-transparent transition-all duration-300 hover:shadow-lg hover:scale-105 hover:from-sply-gold/10 cursor-pointer">
                <CardContent className="p-2.5 lg:p-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1.5 lg:mb-2 text-xs sm:text-sm font-montserrat">The Opportunity</h4>
                    <p className="text-gray-600 text-xs font-noto-serif-ethiopic leading-relaxed">
                      American suppliers are receiving more purchase orders than ever — but capital isn't keeping up. 
                      Rising demand from defense and infrastructure projects is creating a financing gap across U.S. manufacturing.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center py-0.5">
                <ArrowRight className="w-3 lg:w-4 h-3 lg:h-4 text-sply-gold" />
              </div>

              <Card className="border-l-4 border-l-gray-400 bg-gray-50/80 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-gray-100/90 cursor-pointer">
                <CardContent className="p-2.5 lg:p-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1.5 lg:mb-2 text-xs sm:text-sm font-montserrat">The Challenge</h4>
                    <p className="text-gray-600 text-xs font-noto-serif-ethiopic leading-relaxed">
                      Small vendors win big contracts — but lack the cash to fulfill them. Banks can't move fast enough.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center py-0.5">
                <ArrowRight className="w-3 lg:w-4 h-3 lg:h-4 text-sply-gold" />
              </div>

              <Card className="border-l-4 border-l-sply-navy bg-white transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-gray-50/50 cursor-pointer flex-grow">
                <CardContent className="p-2.5 lg:p-3 h-full flex flex-col">
                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-800 mb-1.5 lg:mb-2 text-xs sm:text-sm font-montserrat">Our Solution</h4>
                    <p className="text-gray-600 text-xs font-noto-serif-ethiopic leading-relaxed">
                      SPLYFI bridges that gap — funding verified purchase orders from Fortune 1000 and government buyers.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Side - Value Proposition */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:pl-6 flex mt-4 lg:mt-0"
            >
              <Card className="border-2 border-sply-navy bg-sply-navy text-white shadow-2xl flex-grow flex flex-col">
                <CardContent className="p-4 lg:p-6 flex flex-col h-full">
                  {/* Header with Icon */}
                  <div className="flex items-center space-x-2 lg:space-x-3 mb-4 lg:mb-6">
                    <div className="w-10 lg:w-12 h-10 lg:h-12 bg-sply-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2 font-montserrat">Proven Performance</h4>
                      <p className="text-gray-200 text-xs lg:text-sm leading-relaxed font-noto-serif-ethiopic">
                        Funding has enabled over 180 real-world transactions, accelerating U.S. production and generating 12%+ annualized yield.
                      </p>
                    </div>
                  </div>
                  
                  {/* Statistics Grid */}
                  <div className="grid grid-cols-1 gap-3 lg:gap-4 mt-auto">
                    <div className="text-center p-3 lg:p-4 bg-white/10 rounded-lg border border-white/20">
                      <div className="text-xl lg:text-2xl font-bold text-sply-gold font-montserrat mb-1">$31M+</div>
                      <div className="text-xs text-gray-300 font-noto-serif-ethiopic uppercase tracking-wide">Purchase Orders Financed</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 lg:gap-3">
                      <div className="text-center p-3 lg:p-4 bg-white/10 rounded-lg border border-white/20">
                        <div className="text-base lg:text-lg font-bold text-sply-gold font-montserrat mb-1">188</div>
                        <div className="text-xs text-gray-300 font-noto-serif-ethiopic uppercase tracking-wide">Transactions to Date</div>
                      </div>
                      <div className="text-center p-3 lg:p-4 bg-white/10 rounded-lg border border-white/20">
                        <div className="text-base lg:text-lg font-bold text-sply-gold font-montserrat mb-1">83 Days</div>
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
