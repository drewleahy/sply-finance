
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Database } from "@/integrations/supabase/types";
import { asTableInsert } from "@/utils/supabaseHelpers";

type DealInsert = Database['public']['Tables']['deals']['Insert'];

export const DealSubmissionForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    founderName: "",
    email: "",
    phone: "",
    description: "",
    investmentAmount: "",
    pitchDeck: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let pitchDeckUrl = "";
      if (formData.pitchDeck) {
        const fileExt = formData.pitchDeck.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { error: uploadError, data } = await supabase.storage
          .from("pitch-decks")
          .upload(fileName, formData.pitchDeck);

        if (uploadError) throw uploadError;
        
        // Get the public URL for the uploaded file
        const { data: { publicUrl } } = supabase.storage
          .from("pitch-decks")
          .getPublicUrl(fileName);
          
        pitchDeckUrl = publicUrl;
      }

      const dealData = asTableInsert<DealInsert>({
        company_name: formData.companyName,
        founder_name: formData.founderName,
        email: formData.email,
        phone: formData.phone,
        description: formData.description,
        investment_amount: parseFloat(formData.investmentAmount),
        pitch_deck_url: pitchDeckUrl,
      });

      const { error } = await supabase.from("deals").insert(dealData);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your deal has been submitted successfully.",
      });

      setFormData({
        companyName: "",
        founderName: "",
        email: "",
        phone: "",
        description: "",
        investmentAmount: "",
        pitchDeck: null,
      });
    } catch (error) {
      console.error('Error submitting deal:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit deal. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-luxon-navy mb-6">Submit a Deal</h2>
      
      <div className="space-y-4">
        <div>
          <Input
            placeholder="Company Name"
            value={formData.companyName}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
            required
          />
        </div>
        
        <div>
          <Input
            placeholder="Founder Name"
            value={formData.founderName}
            onChange={(e) =>
              setFormData({ ...formData, founderName: e.target.value })
            }
            required
          />
        </div>
        
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Input
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        
        <div>
          <Input
            type="number"
            placeholder="Investment Amount"
            value={formData.investmentAmount}
            onChange={(e) =>
              setFormData({ ...formData, investmentAmount: e.target.value })
            }
            required
          />
        </div>
        
        <div>
          <Textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
        </div>
        
        <div>
          <Input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) =>
              setFormData({
                ...formData,
                pitchDeck: e.target.files ? e.target.files[0] : null,
              })
            }
          />
        </div>
      </div>

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? "Submitting..." : "Submit Deal"}
      </Button>
    </form>
  );
};
