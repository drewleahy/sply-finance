import { Check } from "lucide-react";

export const FundDetails = () => {
  const mainPoints = [
    "Exclusive access for mid cap investors (>$50M)",
    "8-14% Avg Annual Returns",
    "12m holding period",
    "5 year investment lookback history and $100M AUM",
    "Investment Dashboard & Treasury Profile",
  ];

  const portfolioDetails = [
    { type: "Investment Grade", return: "8%" },
    { type: "Insurance Backed", return: "9%" },
    { type: "Credit Certified", return: "10-15%" },
    { type: "Domicile, Currency, Industry" },
  ];

  return (
    <section className="py-16 bg-sply-navy text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-sply-gold">
          Fund Details
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Points */}
          <div className="space-y-6 mb-12">
            {mainPoints.map((point, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 animate-fadeIn" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Check className="w-6 h-6 text-sply-gold flex-shrink-0 mt-1" />
                <p className="text-lg">{point}</p>
              </div>
            ))}
          </div>

          {/* Portfolio Selection */}
          <div className="bg-white/5 rounded-lg p-8 mb-8 animate-fadeIn" style={{ animationDelay: "500ms" }}>
            <h3 className="text-xl font-semibold mb-6 text-sply-gold">
              Diversified Portfolio Selection
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {portfolioDetails.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-sply-gold" />
                  <span>{item.type}</span>
                  {item.return && (
                    <span className="text-sply-gold ml-auto">
                      {item.return}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Earnings */}
          <div 
            className="flex items-start gap-4 animate-fadeIn"
            style={{ animationDelay: "600ms" }}
          >
            <Check className="w-6 h-6 text-sply-gold flex-shrink-0 mt-1" />
            <p className="text-lg">Transparent Monthly Earnings & Portfolio Holdings</p>
          </div>
        </div>
      </div>
    </section>
  );
};