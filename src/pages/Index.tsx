import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Portfolio } from "@/components/Portfolio";
import { InvestmentThesis } from "@/components/InvestmentThesis";
import { Podcast } from "@/components/Podcast";
import { Subscribe } from "@/components/Subscribe";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-luxon-navy flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex justify-end">
        <Link to="/auth" className="text-luxon-gold hover:text-luxon-gold/80 font-semibold">
          LP LOGIN
        </Link>
      </header>

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-luxon-gold mb-4">Submit a Deal</h2>
          <p className="text-luxon-offwhite mb-6">
            Have a deal we should look at? Use our form to submit the details
          </p>
          <Link to="/submit-deal">
            <Button className="bg-luxon-gold hover:bg-luxon-gold/90 text-white">
              Submit a Deal
            </Button>
          </Link>
        </section>
        <Hero />
        <InvestmentThesis />
        <Portfolio />
        <Partners />
        <Podcast />
        <Subscribe />
      </main>

      {/* Footer */}
      <footer className="bg-luxon-navy border-t border-luxon-gold/20 mt-16">
        <div className="container mx-auto px-4 py-8 flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          <p className="text-luxon-muted">© 2024 All rights reserved</p>
          <Link to="/auth" className="text-luxon-gold hover:text-luxon-gold/80 font-semibold">
            LP LOGIN
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Index;