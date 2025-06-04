
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";

export const WhatWeDo = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-sply-navy mb-6 font-montserrat">
              What We Do
            </h2>
            <h3 className="text-2xl md:text-3xl font-noto-serif-ethiopic text-sply-gold mb-8">
              Private Credit That Powers U.S. Manufacturing
            </h3>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Problem/Solution */}
            <div className="space-y-6">
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
            </div>

            {/* Right Side - Value Proposition */}
            <div className="lg:pl-8">
              <Card className="border-2 border-sply-navy bg-sply-navy text-white shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-sply-gold rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 font-montserrat">Mutual Success</h4>
                      <p className="text-gray-200 text-lg leading-relaxed font-noto-serif-ethiopic">
                        We unlock opportunity for American suppliers — and generate yield for our investors.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="text-center p-4 bg-white/10 rounded-lg">
                      <div className="text-2xl font-bold text-sply-gold font-montserrat">$50M+</div>
                      <div className="text-sm text-gray-300 font-noto-serif-ethiopic">Capital Deployed</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-lg">
                      <div className="text-2xl font-bold text-sply-gold font-montserrat">100+</div>
                      <div className="text-sm text-gray-300 font-noto-serif-ethiopic">Suppliers Funded</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-sply-gold/10 px-6 py-3 rounded-full">
              <span className="text-sply-navy font-semibold font-noto-serif-ethiopic">Ready to bridge the gap?</span>
              <ArrowRight className="w-4 h-4 text-sply-navy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
