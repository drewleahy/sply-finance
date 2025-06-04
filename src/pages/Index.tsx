
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

      {/* Modern Simplified Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="md:col-span-1">
              <h3 
                className="text-2xl font-bold mb-3 text-sply-navy"
                style={{ fontFamily: 'ADAM, sans-serif' }}
              >
                SPLYFI
              </h3>
              <p className="text-gray-600 mb-6 font-noto-serif-ethiopic leading-relaxed text-sm">
                Powering American manufacturing through innovative trade finance solutions.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                <a 
                  href="https://linkedin.com/in/drew-leahy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-sply-navy hover:text-white transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/tyler-williams-476283101/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-sply-navy hover:text-white transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-900 font-montserrat uppercase tracking-wide">
                Access
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/lp" 
                    className="text-gray-600 hover:text-sply-navy transition-colors font-noto-serif-ethiopic text-sm"
                  >
                    Limited Partner Portal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-900 font-montserrat uppercase tracking-wide">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:info@splyfi.com" 
                    className="text-gray-600 hover:text-sply-navy transition-colors font-noto-serif-ethiopic text-sm flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2 text-gray-400" />
                    info@splyfi.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="py-6 border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-xs text-gray-500 font-noto-serif-ethiopic">
                © 2024 SPLYFI. All rights reserved.
              </div>
              
              {/* Legal Links */}
              <div className="flex flex-wrap items-center space-x-6 text-xs">
                <button className="text-gray-500 hover:text-sply-navy transition-colors font-noto-serif-ethiopic">
                  Privacy Policy
                </button>
                <button className="text-gray-500 hover:text-sply-navy transition-colors font-noto-serif-ethiopic">
                  Terms of Service
                </button>
                <button className="text-gray-500 hover:text-sply-navy transition-colors font-noto-serif-ethiopic">
                  Investment Disclosures
                </button>
              </div>
            </div>
            
            {/* Risk Disclaimer */}
            <div className="mt-6 pt-6 border-t border-gray-50">
              <p className="text-xs text-gray-400 font-noto-serif-ethiopic leading-relaxed max-w-4xl">
                <span className="font-medium text-gray-500">Investment Risk Disclosure:</span> All investments involve risk, including the potential loss of principal. 
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
