
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
    partner.name === "James Wiseman" ||
    partner.name === "Jamie Wiseman"  // Include both name variations for James/Jamie
  );
  
  // Normalize any "Jamie Wiseman" to "James Wiseman" for display
  const normalizedMembers = primaryMembers.map(member => {
    if (member.name === "Jamie Wiseman") {
      return {...member, name: "James Wiseman"};
    }
    return member;
  });
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {normalizedMembers.map((member, index) => (
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
