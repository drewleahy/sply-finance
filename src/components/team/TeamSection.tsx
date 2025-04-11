
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
  // Filter for primary team members and ensure they're at the top
  const primaryMembers = partners.filter(partner => 
    partner.name === "Drew Leahy" || 
    partner.name === "Tyler Williams" || 
    partner.name === "James Wiseman"
  );
  
  // Get the remaining team members
  const otherMembers = partners.filter(partner => 
    !primaryMembers.some(primaryMember => primaryMember.name === partner.name)
  );
  
  return (
    <>
      {/* Primary Team Members (Featured) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {primaryMembers.map((member, index) => (
          <TeamMember 
            key={member.id} 
            member={member} 
            index={index} 
            isPrimary={true}
          />
        ))}
      </div>
      
      {/* Secondary Team Members (if any) */}
      {otherMembers.length > 0 && (
        <div className="mt-16">
          <h3 className="text-2xl font-serif text-center mb-10">Extended Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherMembers.map((member, index) => (
              <TeamMember 
                key={member.id} 
                member={member} 
                index={index}
                isPrimary={false}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
