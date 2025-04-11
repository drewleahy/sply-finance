
import { useState } from "react";
import { Check } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { Database } from "@/integrations/supabase/types";
import { unwrapResult, safeObject, asTableInsert } from "@/utils/supabaseHelpers";

type LpGroup = Database['public']['Tables']['lp_groups']['Row'];
type LpGroupsDealInsert = Database['public']['Tables']['lp_groups_deals']['Insert'];

interface LPSelectionDialogProps {
  dealId: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LPSelectionDialog = ({ dealId, isOpen, onClose }: LPSelectionDialogProps) => {
  const { toast } = useToast();
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: lpGroups = [], isLoading } = useQuery({
    queryKey: ["lpGroups"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("lp_groups")
        .select("*")
        .order("name");
      if (error) throw error;
      return unwrapResult<LpGroup>(data);
    },
  });

  const handleGroupToggle = (groupId: string) => {
    setSelectedGroups((prev) =>
      prev.includes(groupId)
        ? prev.filter((id) => id !== groupId)
        : [...prev, groupId]
    );
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Create an array of properly typed objects
      const sharingsToInsert = selectedGroups.map((groupId) => 
        asTableInsert<LpGroupsDealInsert>({
          deal_id: dealId,
          lp_group_id: groupId,
        })
      );

      // Insert the array of objects
      const { error } = await supabase
        .from("lp_groups_deals")
        .insert(sharingsToInsert);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Deal has been shared with selected LP groups",
      });
      onClose();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to share deal with LP groups",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select LP Groups</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {isLoading ? (
            <p>Loading LP groups...</p>
          ) : (
            <div className="space-y-2">
              {lpGroups.map((group) => {
                // Use safeObject to ensure type safety
                const lpGroup = safeObject<LpGroup>(group, {} as LpGroup);
                
                return (
                  <div
                    key={lpGroup.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedGroups.includes(lpGroup.id)
                        ? "border-luxon-gold bg-luxon-gold/10"
                        : "border-gray-200 hover:border-luxon-gold"
                    }`}
                    onClick={() => handleGroupToggle(lpGroup.id)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{lpGroup.name}</span>
                      {selectedGroups.includes(lpGroup.id) && (
                        <Check className="h-5 w-5 text-luxon-gold" />
                      )}
                    </div>
                    {lpGroup.description && (
                      <p className="text-sm text-gray-500 mt-1">
                        {lpGroup.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={selectedGroups.length === 0 || isSubmitting}
            >
              Share Deal
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
