
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMemberProps {
  member: {
    id: string;
    name: string;
    role: string;
    bio: string;
    photo_url: string | null;
  };
  index: number;
  isPrimary?: boolean;
}

export const TeamMember = ({ member, index, isPrimary = false }: TeamMemberProps) => {
  const getLinkedInUrl = (name: string) => {
    switch (name) {
      case "Tyler Williams":
        return "https://www.linkedin.com/in/tyler-williams-476283101";
      case "Drew Leahy":
        return "https://www.linkedin.com/in/drewleahy/";
      case "James Wiseman":
        return "https://www.linkedin.com/in/jamie-wiseman-944782/";
      case "Jamie Wiseman":
        return "https://www.linkedin.com/in/jamie-wiseman-944782/";
      case "Matt Saffaii":
        return "https://www.linkedin.com/in/matthew-j-s-673570/";
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
        return "/lovable-uploads/d5f96b45-0af7-4971-b7f3-0eef36becf49.png";
      case "Jamie Wiseman":
        return "/lovable-uploads/d5f96b45-0af7-4971-b7f3-0eef36becf49.png";
      case "Matt Saffaii":
        return "/lovable-uploads/c4830ecd-7c8f-4fff-8292-15424ff7b1f3.png";
      default:
        return "https://images.unsplash.com/photo-1461749280684-dccba630e2f6";
    }
  };

  // Normalize name for consistent display - always show as "James Wiseman"
  const displayName = member.name === "Jamie Wiseman" ? "James Wiseman" : member.name;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className={cn(
        "flex flex-col items-center text-center group",
        isPrimary && "bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
      )}
    >
      <div className="mb-6 relative">
        <Avatar className={cn(
          "object-cover transition-all duration-300", 
          isPrimary ? "h-52 w-52 border-4 border-white shadow-lg" : "h-40 w-40"
        )}>
          <AvatarImage
            src={member.photo_url || getPlaceholderImage(displayName)}
            alt={displayName}
            className="object-cover transition-transform duration-300 group-hover:scale-105 grayscale hover:grayscale-0"
          />
          <AvatarFallback className="bg-gray-100 text-4xl text-gray-500 font-noto-serif-ethiopic">
            {displayName[0]}
          </AvatarFallback>
        </Avatar>
      </div>
      
      <h3 className={cn(
        "text-gray-900 font-bold mb-2 font-montserrat", 
        isPrimary ? "text-2xl" : "text-xl"
      )}>
        {displayName}
      </h3>
      
      <p className="text-gray-600 mb-4 font-noto-serif-ethiopic">{member.role}</p>
      
      <p className={cn(
        "text-gray-600 leading-relaxed mb-4 font-noto-serif-ethiopic",
        isPrimary ? "text-sm max-w-sm" : "text-xs max-w-xs"
      )}>
        {member.bio}
      </p>
      
      {getLinkedInUrl(displayName) && (
        <a 
          href={getLinkedInUrl(displayName)} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          <span className="text-sm font-noto-serif-ethiopic">LinkedIn</span>
        </a>
      )}
    </motion.div>
  );
};
