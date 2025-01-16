import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { InvestmentThesis } from "@/components/InvestmentThesis";
import { Subscribe } from "@/components/Subscribe";
import { InvestmentFlow } from "@/components/InvestmentFlow";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-4 py-2 flex justify-end bg-white border-b">
        <Link to="/auth" className="text-gray-800 hover:text-gray-600 font-semibold">
          LP LOGIN
        </Link>
      </header>

      <main className="flex-grow">
        <Hero />
        <InvestmentThesis />
        <InvestmentFlow />
        <Partners />
        <section className="container mx-auto px-4 py-12 bg-gray-50 rounded-lg my-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Submit a Deal</h2>
          <p className="text-gray-600 mb-6">
            Looking for financing solutions? Submit your deal for review today.
          </p>
          <Link to="/submit-deal">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white">
              Submit a Deal
            </Button>
          </Link>
        </section>
        <Subscribe />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8 flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          <p className="text-gray-600">© 2024 All rights reserved</p>
          <Link to="/auth" className="text-gray-800 hover:text-gray-600 font-semibold">
            LP LOGIN
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Index;