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

export const DocumentManagement = () => {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [newDocument, setNewDocument] = useState({
    title: "",
    description: "",
    file: null as File | null,
    isGlobal: false,
  });

  const { data: documents, refetch } = useQuery({
    queryKey: ["documents"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("documents")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewDocument({ ...newDocument, file: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDocument.file) return;

    setUploading(true);
    try {
      const fileExt = newDocument.file.name.split('.').pop();
      const filePath = `${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(filePath, newDocument.file);

      if (uploadError) throw uploadError;

      const { error: dbError } = await supabase.from("documents").insert([
        {
          title: newDocument.title,
          description: newDocument.description,
          file_path: filePath,
          is_global: newDocument.isGlobal,
        },
      ]);

      if (dbError) throw dbError;

      toast({
        title: "Success",
        description: "Document uploaded successfully",
      });

      setNewDocument({
        title: "",
        description: "",
        file: null,
        isGlobal: false,
      });
      refetch();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to upload document",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold">Upload New Document</h2>
        <Input
          placeholder="Document Title"
          value={newDocument.title}
          onChange={(e) => setNewDocument({ ...newDocument, title: e.target.value })}
          required
        />
        <Textarea
          placeholder="Description"
          value={newDocument.description}
          onChange={(e) => setNewDocument({ ...newDocument, description: e.target.value })}
        />
        <Input
          type="file"
          onChange={handleFileChange}
          required
        />
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isGlobal"
            checked={newDocument.isGlobal}
            onChange={(e) => setNewDocument({ ...newDocument, isGlobal: e.target.checked })}
          />
          <label htmlFor="isGlobal">Make available to all LPs</label>
        </div>
        <Button type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload Document"}
        </Button>
      </form>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Documents</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Global</TableHead>
              <TableHead>Uploaded</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents?.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>{doc.title}</TableCell>
                <TableCell>{doc.description}</TableCell>
                <TableCell>{doc.is_global ? "Yes" : "No"}</TableCell>
                <TableCell>{new Date(doc.created_at).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};