import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Portfolio } from "@/components/Portfolio";
import { InvestmentThesis } from "@/components/InvestmentThesis";
import { Podcast } from "@/components/Podcast";
import { Subscribe } from "@/components/Subscribe";
import { DealSubmissionForm } from "@/components/DealSubmissionForm";

const Index = () => {
  return (
    <main className="min-h-screen bg-luxon-navy">
      <Hero />
      <InvestmentThesis />
      <Portfolio />
      <Partners />
      <DealSubmissionForm />
      <Podcast />
      <Subscribe />
    </main>
  );
};

export default Index;