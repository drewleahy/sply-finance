
import { Check } from "lucide-react";

export const TeamAlpha = () => {
  const alphaPoints = [
    "Portfolio Management, Quarterly Presentations, and Allocation Recommendations for Families",
    "Private credit allocation assessment by our expert team",
    "Credit underwriting QA & procedures for family offices on a deal by deal basis",
    "Portal reporting & allocation based on expertise of family or thesis necessity",
    "GPs source SM / High Tech Corporations from our network for high impact / high reward deals"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-sply-navy font-montserrat">
          How Our Team Drives Alpha
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {alphaPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4 animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
              <Check className="w-6 h-6 text-sply-gold flex-shrink-0 mt-1" />
              <p className="text-lg text-sply-navy font-noto-serif-ethiopic">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
