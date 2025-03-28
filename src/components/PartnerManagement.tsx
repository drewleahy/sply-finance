
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { Label } from "@/components/ui/label";
import { Database } from "@/integrations/supabase/types";
import { unwrapResult } from "@/utils/supabaseHelpers";

export const PartnerManagement = () => {
  const { toast } = useToast();
  const [editingPartner, setEditingPartner] = useState<any>(null);
  const [uploading, setUploading] = useState(false);

  const { data: partners = [], refetch } = useQuery({
    queryKey: ["partners"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("partners")
        .select("*")
        .order("display_order", { ascending: true });
      
      if (error) throw error;
      return unwrapResult(data);
    },
  });

  const handlePhotoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!event.target.files || !event.target.files[0]) return;

      const file = event.target.files[0];
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "File size must be less than 5MB",
        });
        return;
      }

      // Validate file type
      if (!file.type.startsWith("image/")) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "File must be an image",
        });
        return;
      }

      setUploading(true);
      const fileExt = file.name.split(".").pop();
      const filePath = `${editingPartner.id}-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("partner-photos")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("partner-photos")
        .getPublicUrl(filePath);

      setEditingPartner({
        ...editingPartner,
        photo_url: publicUrl,
      });

      toast({
        title: "Success",
        description: "Photo uploaded successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to upload photo",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    try {
      const updateData: Database['public']['Tables']['partners']['Update'] = {
        name: editingPartner.name,
        role: editingPartner.role,
        bio: editingPartner.bio,
        photo_url: editingPartner.photo_url,
      };

      const { error } = await supabase
        .from("partners")
        .update(updateData)
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
        <div className="text-sm text-gray-500 mb-4">
          <p>Recommended image specifications:</p>
          <ul className="list-disc list-inside">
            <li>Square format (1:1 aspect ratio)</li>
            <li>Minimum dimensions: 400x400 pixels</li>
            <li>Maximum file size: 5MB</li>
            <li>Supported formats: JPG, PNG</li>
          </ul>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Photo</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Bio</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {partners.map((partner) => (
              <TableRow key={partner.id}>
                <TableCell>
                  <Avatar className="h-20 w-20">
                    {partner.photo_url ? (
                      <AvatarImage
                        src={partner.photo_url}
                        alt={partner.name}
                        className="object-cover"
                      />
                    ) : (
                      <AvatarFallback className="text-lg">
                        {partner.name[0]}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  {editingPartner?.id === partner.id && (
                    <div className="mt-2">
                      <Label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                        Update photo
                      </Label>
                      <Input
                        id="photo"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        disabled={uploading}
                        className="mt-1"
                      />
                    </div>
                  )}
                </TableCell>
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
