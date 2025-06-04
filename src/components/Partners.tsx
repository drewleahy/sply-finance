
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { unwrapResult } from "@/utils/supabaseHelpers";
import { Database } from "@/integrations/supabase/types";
import { partnerData } from "@/utils/partnerData";
import { TeamSection } from "./team/TeamSection";
import { PartnerLogos } from "./partner/PartnerLogos";
import { motion } from "framer-motion";

type Partner = Database['public']['Tables']['partners']['Row'];

const infrastructurePartners = [
  {
    name: "Tradeteq",
    logo: "/lovable-uploads/c9f73e94-ba15-4530-972a-642aab8b56aa.png"
  },
  {
    name: "BNY Mellon",
    logo: "/lovable-uploads/36ae24d4-0bcf-419a-b278-34449f2c164d.png"
  },
  {
    name: "Stripe",
    logo: "/lovable-uploads/69d053b8-d3e1-47bb-9ee0-c0c26b92332c.png"
  },
  {
    name: "PwC",
    logo: "/lovable-uploads/62a77196-8d17-4dfc-b3dc-d99f38f9c258.png"
  },
  {
    name: "Monex",
    logo: "/lovable-uploads/b1ae6445-cd35-4cbc-b787-6611b048a4e3.png"
  }
];

const enterpriseCustomers = [
  {
    name: "Tesla",
    logo: "/lovable-uploads/4de9f5a3-bb81-4e94-bee1-98b9400a4b42.png"
  },
  {
    name: "Vestas",
    logo: "/lovable-uploads/9ba0a47a-13f2-4f94-82e4-b9911ee8c1c1.png"
  },
  {
    name: "Boeing",
    logo: "/lovable-uploads/87d1ef8d-97d2-4d63-924d-32dc07b23b4d.png"
  },
  {
    name: "General Dynamics",
    logo: "/lovable-uploads/0bd0ab8a-57fe-445c-a6db-5fafa2c25d6d.png"
  },
  {
    name: "Lockheed Martin",
    logo: "/lovable-uploads/eeba9a4a-a9ac-4dc4-b37a-03ba00de8995.png"
  },
  {
    name: "Vodafone",
    logo: "/lovable-uploads/a027a0e8-0734-4790-8ce7-94b070727a01.png"
  },
  {
    name: "Capgemini",
    logo: "/lovable-uploads/29bb4bf7-9656-46d2-9df0-481d9002dda1.png"
  }
];

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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-800 mb-4">
            Leadership Team
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-noto-serif-ethiopic">
            Led by Operators. Backed by Experience.
          </p>
        </motion.div>
        
        <TeamSection partners={partners} />

        <div className="mt-32">
          <div className="bg-gray-50 py-16 px-8 rounded-2xl">
            <PartnerLogos 
              title="Infrastructure Partners & Funders"
              partners={infrastructurePartners}
              gridCols="grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
            />

            <div className="border-t border-gray-200 pt-16">
              <PartnerLogos 
                title="Enterprise Customers"
                partners={enterpriseCustomers}
                gridCols="grid-cols-2 md:grid-cols-3 lg:grid-cols-7"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
