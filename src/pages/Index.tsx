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
  );
};

export default Index;