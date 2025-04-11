
import { TeamMember } from "./TeamMember";

interface TeamSectionProps {
  partners: Array<{
    id: string;
    name: string;
    role: string;
    bio: string;
    photo_url: string | null;
  }>;
}

export const TeamSection = ({ partners }: TeamSectionProps) => {
  // Ensure Drew, Tyler, and James are primary team members
  const primaryMembers = partners.filter(partner => 
    partner.name === "Drew Leahy" || 
    partner.name === "Tyler Williams" || 
    partner.name === "James Wiseman"
  );
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {primaryMembers.map((member, index) => (
          <TeamMember 
            key={member.id} 
            member={member} 
            index={index} 
            isPrimary={true}
          />
        ))}
      </div>
    </>
  );
};
