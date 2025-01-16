import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";

const infrastructurePartners = [
  {
    name: "Tradeteq",
    logo: "/lovable-uploads/4685d67b-ea21-4929-9b36-e5fce7fa0c69.png#tradeteq"
  },
  {
    name: "BNY Mellon",
    logo: "/lovable-uploads/4685d67b-ea21-4929-9b36-e5fce7fa0c69.png#bny"
  },
  {
    name: "Stripe",
    logo: "/lovable-uploads/4685d67b-ea21-4929-9b36-e5fce7fa0c69.png#stripe"
  },
  {
    name: "PwC",
    logo: "/lovable-uploads/4685d67b-ea21-4929-9b36-e5fce7fa0c69.png#pwc"
  },
  {
    name: "Simplex Inc.",
    logo: "/lovable-uploads/4685d67b-ea21-4929-9b36-e5fce7fa0c69.png#simplex"
  },
  {
    name: "Monex",
    logo: "/lovable-uploads/4685d67b-ea21-4929-9b36-e5fce7fa0c69.png#monex"
  }
];

const enterpriseCustomers = [
  {
    name: "Tesla",
    logo: "/lovable-uploads/4685d67b-ea21-4929-9b36-e5fce7fa0c69.png#tesla"
  },
  {
    name: "Vestas",
    logo: "/lovable-uploads/4685d67b-ea21-4929-9b36-e5fce7fa0c69.png#vestas"
  },
  {
    name: "Boeing",
    logo: "/lovable-uploads/4685d67b-ea21-4929-9b36-e5fce7fa0c69.png#boeing"
  },
  {
    name: "General Dynamics",
    logo: "/lovable-uploads/4685d67b-ea21-4929-9b36-e5fce7fa0c69.png#gd"
  },
  {
    name: "Lockheed Martin",
    logo: "/lovable-uploads/4685d67b-ea21-4929-9b36-e5fce7fa0c69.png#lm"
  },
  {
    name: "Vodafone",
    logo: "/lovable-uploads/4685d67b-ea21-4929-9b36-e5fce7fa0c69.png#vodafone"
  },
  {
    name: "Capgemini",
    logo: "/lovable-uploads/4685d67b-ea21-4929-9b36-e5fce7fa0c69.png#capgemini"
  }
];

const getLinkedInUrl = (name: string) => {
  switch (name) {
    case "Tyler Williams":
      return "https://www.linkedin.com/in/tyler-williams-476283101";
    case "Drew Leahy":
      return "https://www.linkedin.com/in/drewleahy/";
    default:
      return "";
  }
};

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
          Our Team
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Experienced leadership driving innovation in trade finance
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
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
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mb-4">
                {partner.bio}
              </p>
              {getLinkedInUrl(partner.name) && (
                <a 
                  href={getLinkedInUrl(partner.name)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-serif text-gray-900 text-center mb-8">
            Infrastructure Partners & Funders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {infrastructurePartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg h-24"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-serif text-gray-900 text-center mb-8">
            Enterprise Customers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
            {enterpriseCustomers.map((customer, index) => (
              <motion.div
                key={customer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg h-24"
              >
                <img 
                  src={customer.logo} 
                  alt={customer.name}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};