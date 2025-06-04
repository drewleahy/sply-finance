
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Subscribe } from "@/components/Subscribe";
import { WhatWeDo } from "@/components/WhatWeDo";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustTransparency } from "@/components/TrustTransparency";
import { MarketOpportunity } from "@/components/MarketOpportunity";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-noto-serif-ethiopic" style={{backgroundColor: '#fafafa'}}>
      {/* Header */}
      <header className="container mx-auto px-4 py-2 flex justify-between items-center bg-white border-b">
        <h1 
          className="text-2xl md:text-3xl font-bold text-gray-800"
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
        <HowItWorks />
        <TrustTransparency />
        <MarketOpportunity />
        <Partners />
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
