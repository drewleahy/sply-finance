
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Subscribe } from "@/components/Subscribe";
import { WhatWeDo } from "@/components/WhatWeDo";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustTransparency } from "@/components/TrustTransparency";
import { MarketOpportunity } from "@/components/MarketOpportunity";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

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

      <main className="flex-grow" style={{backgroundColor: '#fafafa'}}>
        <Hero />
        <WhatWeDo />
        <HowItWorks />
        <TrustTransparency />
        <MarketOpportunity />
        <Partners />
        <Subscribe />
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-sply-navy text-white">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 
                className="text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: 'ADAM, sans-serif' }}
              >
                SPLYFI
              </h3>
              <p className="text-gray-300 mb-6 max-w-md font-noto-serif-ethiopic leading-relaxed">
                Powering American manufacturing through innovative trade finance solutions. 
                We bridge the gap between opportunity and capital for small vendors with Fortune 1000 contracts.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/drew-leahy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sply-gold transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/tyler-williams-476283101/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sply-gold transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 font-montserrat">Access</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/lp" className="text-gray-300 hover:text-sply-gold transition-colors font-noto-serif-ethiopic">
                    Limited Partner Portal
                  </Link>
                </li>
                <li>
                  <Link to="/submit-deal" className="text-gray-300 hover:text-sply-gold transition-colors font-noto-serif-ethiopic">
                    Submit Deal
                  </Link>
                </li>
                <li>
                  <Link to="/auth" className="text-gray-300 hover:text-sply-gold transition-colors font-noto-serif-ethiopic">
                    Vendor Login
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 font-montserrat">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300 font-noto-serif-ethiopic">
                  <Mail className="w-4 h-4 mr-3" />
                  <a href="mailto:info@splyfi.com" className="hover:text-sply-gold transition-colors">
                    info@splyfi.com
                  </a>
                </li>
                <li className="flex items-center text-gray-300 font-noto-serif-ethiopic">
                  <Phone className="w-4 h-4 mr-3" />
                  <a href="tel:+1-555-0123" className="hover:text-sply-gold transition-colors">
                    +1 (555) 012-3456
                  </a>
                </li>
                <li className="flex items-start text-gray-300 font-noto-serif-ethiopic">
                  <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                  <span>New York, NY</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="py-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-400 font-noto-serif-ethiopic">
                © 2024 SPLYFI. All rights reserved.
              </div>
              
              <div className="flex flex-wrap items-center space-x-6 text-sm">
                <button className="text-gray-400 hover:text-sply-gold transition-colors font-noto-serif-ethiopic">
                  Privacy Policy
                </button>
                <button className="text-gray-400 hover:text-sply-gold transition-colors font-noto-serif-ethiopic">
                  Terms of Service
                </button>
                <button className="text-gray-400 hover:text-sply-gold transition-colors font-noto-serif-ethiopic">
                  Investment Disclosures
                </button>
              </div>
            </div>
            
            {/* Risk Disclaimer */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-xs text-gray-500 font-noto-serif-ethiopic leading-relaxed">
                <strong>Investment Risk Disclosure:</strong> All investments involve risk, including the potential loss of principal. 
                Past performance does not guarantee future results. SPLYFI securities are offered to qualified investors only. 
                Please consult with your financial advisor before making any investment decisions.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
