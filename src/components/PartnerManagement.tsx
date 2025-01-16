import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";

export const PartnerManagement = () => {
  const { toast } = useToast();
  const [editingPartner, setEditingPartner] = useState<any>(null);

  const { data: partners, refetch } = useQuery({
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

  const handleSave = async () => {
    try {
      const { error } = await supabase
        .from("partners")
        .update({
          name: editingPartner.name,
          role: editingPartner.role,
          bio: editingPartner.bio,
        })
        .eq("id", editingPartner.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Partner updated successfully",
      });

      setEditingPartner(null);
      refetch();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update partner",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Partners</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Bio</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {partners?.map((partner) => (
              <TableRow key={partner.id}>
                <TableCell>
                  {editingPartner?.id === partner.id ? (
                    <Input
                      value={editingPartner.name}
                      onChange={(e) =>
                        setEditingPartner({
                          ...editingPartner,
                          name: e.target.value,
                        })
                      }
                    />
                  ) : (
                    partner.name
                  )}
                </TableCell>
                <TableCell>
                  {editingPartner?.id === partner.id ? (
                    <Input
                      value={editingPartner.role}
                      onChange={(e) =>
                        setEditingPartner({
                          ...editingPartner,
                          role: e.target.value,
                        })
                      }
                    />
                  ) : (
                    partner.role
                  )}
                </TableCell>
                <TableCell>
                  {editingPartner?.id === partner.id ? (
                    <Textarea
                      value={editingPartner.bio}
                      onChange={(e) =>
                        setEditingPartner({
                          ...editingPartner,
                          bio: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <div className="max-w-md truncate">{partner.bio}</div>
                  )}
                </TableCell>
                <TableCell>
                  {editingPartner?.id === partner.id ? (
                    <div className="space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingPartner(null)}
                      >
                        Cancel
                      </Button>
                      <Button size="sm" onClick={handleSave}>
                        Save
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingPartner(partner)}
                    >
                      Edit
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};