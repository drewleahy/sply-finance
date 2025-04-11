
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";
import { unwrapResult, safeObject } from "@/utils/supabaseHelpers";
import { Database } from "@/integrations/supabase/types";

type Document = Database['public']['Tables']['documents']['Row'];

export const DocumentList = () => {
  const { toast } = useToast();

  const { data: documents = [] } = useQuery({
    queryKey: ["lpDocuments"],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("No user found");

      const { data, error } = await supabase
        .from("documents")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return unwrapResult<Document>(data);
    },
  });

  const downloadDocument = async (filePath: string, title: string) => {
    try {
      const { data, error } = await supabase.storage
        .from("documents")
        .download(filePath);

      if (error) throw error;

      const url = URL.createObjectURL(data);
      const a = document.createElement("a");
      a.href = url;
      a.download = title;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to download document",
      });
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Upload Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {documents.map((doc) => {
          // Use safeObject to ensure type safety
          const document = safeObject<Document>(doc, {} as Document);
          
          return (
            <TableRow key={document.id}>
              <TableCell>{document.title}</TableCell>
              <TableCell>{document.description}</TableCell>
              <TableCell>{new Date(document.created_at).toLocaleDateString()}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => downloadDocument(document.file_path, document.title)}
                >
                  Download
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
