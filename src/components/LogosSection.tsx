
import { motion } from "framer-motion";
import { PartnerLogos } from "./partner/PartnerLogos";

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

export const LogosSection = () => {
  return (
    <section className="py-4" style={{ backgroundColor: '#fafafa' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="py-6 px-6 rounded-xl" style={{ backgroundColor: '#fafafa' }}>
          <PartnerLogos 
            title="Infrastructure Partners & Funders"
            partners={infrastructurePartners}
            gridCols="grid-cols-3 md:grid-cols-5"
          />

          <div className="border-t border-gray-200/60 pt-12">
            <PartnerLogos 
              title="Enterprise Customers"
              partners={enterpriseCustomers}
              gridCols="grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
