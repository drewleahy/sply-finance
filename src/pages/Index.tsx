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
    <main className="min-h-screen bg-luxon-navy">
      <div className="container mx-auto px-4 py-4">
        <Link to="/submit-deal">
          <Button className="bg-luxon-gold hover:bg-luxon-gold/90 text-white">
            Submit a Deal
          </Button>
        </Link>
      </div>
      <Hero />
      <InvestmentThesis />
      <Portfolio />
      <Partners />
      <Podcast />
      <Subscribe />
    </main>
  );
};

export default Index;