
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

export const InvestorCTA = () => {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden" style={{backgroundColor: '#fafafa'}}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sply-navy rounded-full mb-6">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          
          {/* Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-gray-800 mb-6">
            Ready to Explore Investment Opportunities?
          </h2>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-noto-serif-ethiopic leading-relaxed">
            Join qualified investors accessing predictable, asset-backed yields from U.S. defense and aerospace receivables. 
            Complete our investor profile to learn more about SPLYFI's exclusive opportunities.
          </p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Button
              onClick={() => window.open('https://form.typeform.com/to/IYVafnU0', '_blank')}
              className="bg-sply-navy hover:bg-sply-navy/90 text-white font-semibold text-lg px-8 py-4 h-auto rounded-xl transition-all duration-300 transform hover:scale-[1.02] font-montserrat group shadow-lg"
            >
              Learn About Investment Opportunities
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          
          {/* Qualifier Text */}
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-500 font-noto-serif-ethiopic leading-relaxed">
              <span className="font-medium text-gray-600">For Qualified Investors:</span> This information is intended for accredited investors, 
              qualified institutional buyers, and sophisticated investors as defined by applicable securities regulations. 
              Investment opportunities are subject to availability and approval.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
