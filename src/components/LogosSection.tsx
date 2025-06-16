
import { motion } from "framer-motion";
import { PartnerLogos } from "./partner/PartnerLogos";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
  },
  {
    name: "Anduril",
    logo: "/lovable-uploads/e6668a0b-2964-48b2-8902-f50235030f08.png"
  },
  {
    name: "Siemens",
    logo: "/lovable-uploads/270d42b7-9747-4d5a-9af9-ef33534fc7fb.png"
  }
];

export const LogosSection = () => {
  console.log("Enterprise customers with new logos:", enterpriseCustomers);
  
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
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm md:text-base font-montserrat font-semibold text-sply-navy/80 text-center mb-8 uppercase tracking-wider"
            >
              Enterprise Customers
            </motion.h3>
            
            {/* Carousel for Enterprise Customers with Continuous Auto-scroll */}
            <div className="relative overflow-hidden">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                  dragFree: true,
                }}
                className="w-full max-w-5xl mx-auto"
              >
                <CarouselContent className="-ml-2 md:-ml-4 flex animate-[scroll_12s_linear_infinite] hover:[animation-play-state:paused]">
                  {[...enterpriseCustomers, ...enterpriseCustomers, ...enterpriseCustomers].map((partner, index) => {
                    console.log(`Rendering partner ${index}:`, partner.name, partner.logo);
                    return (
                      <CarouselItem key={`${partner.name}-${index}`} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/5">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: (index % enterpriseCustomers.length) * 0.05, duration: 0.4 }}
                          className="group flex items-center justify-center p-4 md:p-6 bg-white/70 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-24 md:h-28 border border-gray-100/80 hover:border-gray-200/80 backdrop-blur-sm"
                        >
                          <img 
                            src={partner.logo} 
                            alt={partner.name}
                            className="w-full h-full max-w-20 max-h-20 md:max-w-24 md:max-h-24 object-contain mx-auto opacity-100 group-hover:filter group-hover:grayscale transition-all duration-300 group-hover:scale-105"
                            style={{
                              objectFit: 'contain',
                              objectPosition: 'center'
                            }}
                            onLoad={() => console.log(`Image loaded: ${partner.name}`)}
                            onError={() => console.log(`Image failed to load: ${partner.name} - ${partner.logo}`)}
                          />
                        </motion.div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
};
