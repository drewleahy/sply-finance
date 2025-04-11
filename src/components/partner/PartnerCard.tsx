
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";

interface PartnerCardProps {
  partner: {
    id: string;
    name: string;
    role: string;
    bio: string;
    photo_url: string | null;
  };
  index: number;
}

export const PartnerCard = ({ partner, index }: PartnerCardProps) => {
  const getLinkedInUrl = (name: string) => {
    switch (name) {
      case "Tyler Williams":
        return "https://www.linkedin.com/in/tyler-williams-476283101";
      case "Drew Leahy":
        return "https://www.linkedin.com/in/drewleahy/";
      case "James Wiseman":
        return "https://www.linkedin.com/in/jamie-wiseman-944782/";
      default:
        return "";
    }
  };

  const getPlaceholderImage = (name: string) => {
    switch (name) {
      case "Tyler Williams":
        return "https://aazfuzqjeszvqqlnoeoa.supabase.co/storage/v1/object/public/partner-photos/Tyler.jpg?t=2025-01-18T03%3A17%3A10.792Z";
      case "Drew Leahy":
        return "/lovable-uploads/8334bfa7-2b05-482e-9e5f-9ddd8c7b3ecf.png";
      case "James Wiseman":
        return "/lovable-uploads/4d455109-73f2-4170-b790-16cc3a3d11a2.png";
      default:
        return "https://images.unsplash.com/photo-1461749280684-dccba630e2f6";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="flex flex-col items-center text-center group"
    >
      <div className="mb-6 relative">
        <Avatar className="h-48 w-48">
          <AvatarImage
            src={partner.photo_url || getPlaceholderImage(partner.name)}
            alt={partner.name}
            className="object-cover transition-transform duration-300 group-hover:scale-105 grayscale hover:grayscale-0"
          />
          <AvatarFallback className="bg-gray-100 text-4xl text-gray-500 font-serif">
            {partner.name[0]}
          </AvatarFallback>
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
  );
};
