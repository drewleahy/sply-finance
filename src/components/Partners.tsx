import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Partners = () => {
  const { data: partners } = useQuery({
    queryKey: ["partners"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("partners")
        .select("*")
        .order("display_order", { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-gray-900 text-center mb-4">
          General Partners
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Our team brings decades of experience in venture capital, private equity, and entrepreneurship
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {partners?.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 relative">
                <Avatar className="h-48 w-48 rounded-full overflow-hidden">
                  {partner.photo_url ? (
                    <AvatarImage
                      src={partner.photo_url}
                      alt={partner.name}
                      className="object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <AvatarFallback className="bg-gray-100 text-4xl text-gray-500 font-serif rounded-full">
                      {partner.name[0]}
                    </AvatarFallback>
                  )}
                </Avatar>
              </div>
              <h3 className="text-2xl text-gray-900 font-medium mb-2">{partner.name}</h3>
              <p className="text-gray-600 mb-4">{partner.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                {partner.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};