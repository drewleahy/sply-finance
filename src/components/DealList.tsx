import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const DealList = () => {
  const [deals, setDeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDeals = async () => {
      const { data, error } = await supabase
        .from("deals")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setDeals(data);
      }
      setIsLoading(false);
    };

    fetchDeals();
  }, []);

  if (isLoading) {
    return <div>Loading deals...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-luxon-navy mb-6">Available Deals</h2>
      <div className="space-y-4">
        {deals.map((deal: any) => (
          <div
            key={deal.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-luxon-navy">
              {deal.company_name}
            </h3>
            <p className="text-luxon-muted mt-1">Founded by {deal.founder_name}</p>
            <p className="text-sm text-luxon-muted mt-2">{deal.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-luxon-gold font-semibold">
                ${deal.investment_amount?.toLocaleString()}
              </span>
              {deal.pitch_deck_url && (
                <a
                  href={`${supabase.storage.from('pitch-decks').getPublicUrl(deal.pitch_deck_url).data.publicUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-luxon-gold hover:underline"
                >
                  View Pitch Deck
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};