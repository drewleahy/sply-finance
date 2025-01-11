import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

export const DealSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      founder_name: formData.get("founder_name") as string,
      company_name: formData.get("company_name") as string,
      email: formData.get("email") as string,
      description: formData.get("description") as string,
      status: "pending",
    };

    try {
      const { error } = await supabase.from("deals").insert([data]);

      if (error) throw error;

      toast({
        title: "Deal submitted successfully",
        description: "We'll review your submission and get back to you soon.",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error submitting deal",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-luxon-navy">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-serif text-luxon-gold text-center mb-8">
          Submit Your Deal
        </h2>
        <p className="text-luxon-offwhite text-center mb-12">
          Are you building something revolutionary? We'd love to hear from you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              name="founder_name"
              placeholder="Founder Name"
              required
              className="bg-white/10 border-luxon-gold/30 text-luxon-offwhite placeholder:text-luxon-muted"
            />
          </div>
          <div>
            <Input
              name="company_name"
              placeholder="Company Name"
              required
              className="bg-white/10 border-luxon-gold/30 text-luxon-offwhite placeholder:text-luxon-muted"
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="bg-white/10 border-luxon-gold/30 text-luxon-offwhite placeholder:text-luxon-muted"
            />
          </div>
          <div>
            <Textarea
              name="description"
              placeholder="Tell us about your company (500 characters max)"
              maxLength={500}
              required
              className="bg-white/10 border-luxon-gold/30 text-luxon-offwhite placeholder:text-luxon-muted min-h-[150px]"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-luxon-gold hover:bg-luxon-gold/90 text-luxon-navy"
          >
            {isSubmitting ? "Submitting..." : "Submit Deal"}
          </Button>
        </form>
      </div>
    </section>
  );
};