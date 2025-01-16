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
    <section className="py-20 bg-gradient-to-b from-sply-navy to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-sply-gold text-center mb-16">
          General Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {partners?.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6">
                <Avatar className="h-32 w-32 rounded-full overflow-hidden">
                  {partner.photo_url ? (
                    <AvatarImage
                      src={partner.photo_url}
                      alt={partner.name}
                      className="object-cover rounded-full"
                    />
                  ) : (
                    <AvatarFallback className="bg-gradient-to-br from-sply-gold/20 to-sply-gold/10 text-4xl text-sply-gold font-serif rounded-full">
                      {partner.name[0]}
                    </AvatarFallback>
                  )}
                </Avatar>
              </div>
              <h3 className="text-xl text-sply-gold mb-2">{partner.name}</h3>
              <p className="text-sply-offwhite mb-4">{partner.role}</p>
              <p className="text-sply-offwhite text-sm leading-relaxed">
                {partner.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};