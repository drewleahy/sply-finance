
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
      case "Matthew Saffaii":
        return "https://www.linkedin.com/in/matthew-j-s-673570/";
      case "Michael Slawson":
        return "https://www.linkedin.com/in/michael-slawson/";
      case "Haley Swank":
        return "https://www.linkedin.com/in/haley-swank/";
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
      case "Matthew Saffaii":
        return "/lovable-uploads/c4830ecd-7c8f-4fff-8292-15424ff7b1f3.png";
      case "Michael Slawson":
        return "/lovable-uploads/57c65b12-1433-47b2-b924-494dfc22de9e.png";
      case "Haley Swank":
        return "/lovable-uploads/a04feed4-4b2e-498b-9e22-f363b216c4f9.png";
      default:
        return "https://images.unsplash.com/photo-1461749280684-dccba630e2f6";
    }
  };

  const getImageObjectPosition = (name: string) => {
    switch (name) {
      case "Matthew Saffaii":
        return "object-cover object-[center_30%] scale-110";
      case "Michael Slawson":
        return "object-cover object-center scale-125";
      case "Haley Swank":
        return "object-cover object-[center_20%]";
      default:
        return "object-center";
    }
  };

  // Normalize name for consistent display - always show as "James Wiseman"
  const displayName = member.name === "Jamie Wiseman" ? "James Wiseman" : member.name;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col justify-between hover:scale-105"
    >
      <div className="flex flex-col items-center text-center flex-grow">
        <div className="mb-4 relative">
          <Avatar className="h-24 w-24 border-2 border-gray-200 shadow-md overflow-hidden">
            <AvatarImage
              src={member.photo_url || getPlaceholderImage(displayName)}
              alt={displayName}
              className={`object-cover ${getImageObjectPosition(displayName)} w-full h-full transition-all duration-300 grayscale group-hover:grayscale-0`}
            />
            <AvatarFallback className="bg-gray-100 text-2xl text-gray-500 font-noto-serif-ethiopic">
              {displayName[0]}
            </AvatarFallback>
          </Avatar>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-1 font-montserrat">
          {displayName}
        </h3>
        
        <p className="text-gray-600 mb-3 font-noto-serif-ethiopic text-sm">{member.role}</p>
        
        <p className="text-gray-600 leading-relaxed text-xs font-noto-serif-ethiopic flex-grow">
          {member.bio}
        </p>
      </div>
      
      {getLinkedInUrl(displayName) && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <a 
            href={getLinkedInUrl(displayName)} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
          >
            <Linkedin className="w-4 h-4" />
            <span className="font-noto-serif-ethiopic">LinkedIn</span>
          </a>
        </div>
      )}
    </motion.div>
  );
};
