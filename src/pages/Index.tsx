
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { InvestmentThesis } from "@/components/InvestmentThesis";
import { Subscribe } from "@/components/Subscribe";
import { InvestmentFlow } from "@/components/InvestmentFlow";
import { TeamAlpha } from "@/components/TeamAlpha";
import { FundDetails } from "@/components/FundDetails";
import { AssetAllocation } from "@/components/AssetAllocation";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-noto-serif-ethiopic" style={{backgroundColor: '#fafafa'}}>
      {/* Header */}
      <header className="container mx-auto px-4 py-2 flex justify-between items-center bg-white border-b">
        <h1 
          className="text-4xl md:text-5xl font-bold text-gray-800"
          style={{ fontFamily: 'ADAM, sans-serif' }}
        >
          SPLYFI
        </h1>
        <Link to="/auth" className="text-gray-800 hover:text-gray-600 font-semibold font-montserrat">
          LP LOGIN
        </Link>
      </header>

      <main className="flex-grow">
        <Hero />
        <WhatWeDo />
        <AssetAllocation />
        <InvestmentThesis />
        <Partners />
        <FundDetails />
        <InvestmentFlow />
        <TeamAlpha />
        <section className="container mx-auto px-4 py-12 bg-gray-50 rounded-lg my-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-montserrat">Need PO Financing?</h2>
          <p className="text-gray-600 mb-6 font-noto-serif-ethiopic">
            Manufacturing Companies: Looking for financing solutions? Submit your deal for review today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/submit-deal">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white font-montserrat">
                Submit a Deal
              </Button>
            </Link>
            <Link to="/lp">
              <Button className="bg-sply-gold hover:bg-sply-gold/90 text-white font-montserrat">
                Apply to Become A Limited Partner
              </Button>
            </Link>
          </div>
        </section>
        <Subscribe />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8 flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          <p className="text-gray-600 font-noto-serif-ethiopic">© 2024 All rights reserved</p>
          <Link to="/auth" className="text-gray-800 hover:text-gray-600 font-semibold font-montserrat">
            LP LOGIN
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Index;
