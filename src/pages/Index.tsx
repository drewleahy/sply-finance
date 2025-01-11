import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Portfolio } from "@/components/Portfolio";
import { InvestmentThesis } from "@/components/InvestmentThesis";
import { Podcast } from "@/components/Podcast";
import { Subscribe } from "@/components/Subscribe";

const Index = () => {
  return (
    <main className="min-h-screen bg-luxon-navy">
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