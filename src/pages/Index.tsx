import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Portfolio } from "@/components/Portfolio";
import { InvestmentThesis } from "@/components/InvestmentThesis";
import { Podcast } from "@/components/Podcast";
import { Subscribe } from "@/components/Subscribe";
import { DealSubmission } from "@/components/DealSubmission";
import { Events } from "@/components/Events";
import { LPLogin } from "@/components/LPLogin";

const Index = () => {
  return (
    <main className="min-h-screen bg-luxon-navy">
      <Hero />
      <InvestmentThesis />
      <Portfolio />
      <Partners />
      <DealSubmission />
      <Events />
      <Podcast />
      <Subscribe />
      <LPLogin />
    </main>
  );
};

export default Index;