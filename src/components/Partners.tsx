
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { unwrapResult } from "@/utils/supabaseHelpers";
import { Database } from "@/integrations/supabase/types";
import { partnerData } from "@/utils/partnerData";
import { TeamSection } from "./team/TeamSection";
import { motion } from "framer-motion";

type Partner = Database['public']['Tables']['partners']['Row'];

export const Partners = () => {
  const { data: fetchedPartners = [], isLoading, error } = useQuery({
    queryKey: ["partners"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("partners")
        .select("*")
        .order("display_order", { ascending: true });
      
      if (error) {
        console.error("Error fetching partners:", error);
        throw error;
      }
      
      const filteredData = unwrapResult<Partner>(data)?.filter(partner => 
        partner.name !== "Omar Marquez" && 
        (partner.name === "Drew Leahy" || 
         partner.name === "Tyler Williams" || 
         partner.name === "James Wiseman" ||
         partner.name === "Jamie Wiseman")
      ) || [];
      
      console.log("Partners data (filtered):", filteredData);
      
      return filteredData;
    },
  });
  
  // Use local partnerData as primary source, convert to the expected format
  const partners = partnerData.map((partner, index) => ({
    id: `local-${index}`,
    name: partner.name,
    role: partner.role,
    bio: partner.bio,
    photo_url: partner.photo_url,
    display_order: partner.display_order,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }));

  if (isLoading) return <div className="text-center py-12">Loading team information...</div>;
  if (error) return <div className="text-center py-12 text-red-500">Error loading team information</div>;

  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#fafafa' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-800 font-montserrat">
            Leadership Team
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-sply-navy to-sply-gold mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-noto-serif-ethiopic px-2">
            Led by Operators. Backed by Experience.
          </p>
        </motion.div>
        
        <TeamSection partners={partners} />
      </div>
    </section>
  );
};
