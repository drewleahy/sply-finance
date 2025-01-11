import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Subscribe } from "@/components/Subscribe";

const Index = () => {
  return (
    <main className="min-h-screen bg-luxon-navy">
      <Hero />
      <Partners />
      <Subscribe />
    </main>
  );
};

export default Index;