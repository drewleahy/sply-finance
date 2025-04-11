
import { useState } from "react";
import { Check, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { LPSelectionDialog } from "./LPSelectionDialog";
import { Database } from "@/integrations/supabase/types";
import { unwrapResult, safeObject, asTableUpdate, eqFilter } from "@/utils/supabaseHelpers";

type Deal = Database['public']['Tables']['deals']['Row'];
type DealUpdate = Database['public']['Tables']['deals']['Update'];

export const DealList = () => {
  const { toast } = useToast();
  const [selectedDealId, setSelectedDealId] = useState<string | null>(null);
  const [isLPSelectionOpen, setIsLPSelectionOpen] = useState(false);

  const { data: deals = [], isLoading, refetch } = useQuery({
    queryKey: ["deals"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("deals")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return unwrapResult<Deal>(data);
    },
  });

  const handleDealAction = async (dealId: string, status: "approved" | "rejected") => {
    try {
      const { error } = await supabase
        .from("deals")
        .update(asTableUpdate<DealUpdate>({ status }))
        .eq("id", dealId);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Deal has been ${status}`,
      });

      if (status === "approved") {
        setSelectedDealId(dealId);
        setIsLPSelectionOpen(true);
      }

      refetch();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: `Failed to ${status} deal`,
      });
    }
  };

  if (isLoading) {
    return <div>Loading deals...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-luxon-navy mb-6">Available Deals</h2>
      <div className="space-y-4">
        {deals.map((deal) => {
          // Use safe object to access properties
          const dealObj = safeObject<Deal>(deal, {} as Deal);
          
          return (
            <div
              key={dealObj.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-luxon-navy">
                    {dealObj.company_name}
                  </h3>
                  <p className="text-luxon-muted mt-1">Founded by {dealObj.founder_name}</p>
                  <p className="text-sm text-luxon-muted mt-2">{dealObj.description}</p>
                  <div className="mt-4">
                    <span className="text-luxon-gold font-semibold">
                      ${dealObj.investment_amount?.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {dealObj.status === "pending" && (
                    <>
                      <Button
                        size="sm"
                        className="bg-green-500 hover:bg-green-600"
                        onClick={() => handleDealAction(dealObj.id, "approved")}
                      >
                        <Check className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDealAction(dealObj.id, "rejected")}
                      >
                        <X className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </>
                  )}
                  {dealObj.status && (
                    <span
                      className={`px-2 py-1 text-sm rounded-full ${
                        dealObj.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : dealObj.status === "rejected"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {dealObj.status.charAt(0).toUpperCase() + dealObj.status.slice(1)}
                    </span>
                  )}
                </div>
              </div>
              {dealObj.pitch_deck_url && (
                <div className="mt-4">
                  <a
                    href={dealObj.pitch_deck_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-luxon-gold hover:underline"
                  >
                    View Pitch Deck
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <LPSelectionDialog
        dealId={selectedDealId || ""}
        isOpen={isLPSelectionOpen}
        onClose={() => {
          setIsLPSelectionOpen(false);
          setSelectedDealId(null);
        }}
      />
    </div>
  );
};
