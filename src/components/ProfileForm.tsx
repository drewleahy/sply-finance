import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const ProfileForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data, error } = await supabase
            .from("profiles")
            .select()
            .eq("user_id", user.id)
            .maybeSingle();

          if (error) {
            console.error("Error fetching profile:", error);
            toast({
              variant: "destructive",
              title: "Error",
              description: "Failed to load profile data. Please try again.",
            });
            return;
          }

          if (data) {
            setProfile({
              companyName: data.company_name || "",
              contactName: data.contact_name || "",
              email: data.email || "",
              phone: data.phone || "",
            });
          }
        }
      } catch (error) {
        console.error("Error in fetchProfile:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load profile data. Please try again.",
        });
      }
    };

    fetchProfile();
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("No user found");

      const { error } = await supabase.from("profiles").upsert({
        user_id: user.id,
        company_name: profile.companyName,
        contact_name: profile.contactName,
        email: profile.email,
        phone: profile.phone,
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your profile has been updated successfully.",
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update profile. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-luxon-navy mb-6">LP Profile</h2>
      
      <div className="space-y-4">
        <div>
          <Input
            placeholder="Company Name"
            value={profile.companyName}
            onChange={(e) =>
              setProfile({ ...profile, companyName: e.target.value })
            }
            required
          />
        </div>
        
        <div>
          <Input
            placeholder="Contact Name"
            value={profile.contactName}
            onChange={(e) =>
              setProfile({ ...profile, contactName: e.target.value })
            }
            required
          />
        </div>
        
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Input
            type="tel"
            placeholder="Phone"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
          />
        </div>
      </div>

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? "Saving..." : "Save Profile"}
      </Button>
    </form>
  );
};