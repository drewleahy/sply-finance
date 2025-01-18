import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";

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
    name: "Simplex Asset Management",
    logo: "/lovable-uploads/de2b6e58-00b5-4662-986b-1c3deb737874.png"
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
          Experience our leadership driving innovation in trade finance
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
                  className="max-h-16 max-w-full object-contain"
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
                  className="max-h-16 max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
