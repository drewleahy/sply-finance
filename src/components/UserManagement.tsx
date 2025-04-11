
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
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
import { Database } from "@/integrations/supabase/types";
import { unwrapResult, safeObject, asTableUpdate } from "@/utils/supabaseHelpers";

type Profile = Database['public']['Tables']['profiles']['Row'] & {
  lp_groups?: {
    name: string;
  }
};
type ProfileUpdate = Database['public']['Tables']['profiles']['Update'];

export const UserManagement = () => {
  const { toast } = useToast();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select(`
          *,
          lp_groups (
            name
          )
        `)
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return unwrapResult<Profile>(data);
    },
  });

  const toggleUserRole = async (userId: string, field: "is_admin" | "is_lp", currentValue: boolean) => {
    try {
      const updateData = asTableUpdate<ProfileUpdate>({
        [field]: !currentValue
      });
      
      // Use string literal for eq filter to avoid type issues
      const { error } = await supabase
        .from("profiles")
        .update(updateData)
        .eq('user_id', userId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "User role updated successfully",
      });

      refetch();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update user role",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Users</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Contact Name</TableHead>
              <TableHead>LP Group</TableHead>
              <TableHead>Roles</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => {
              // Use safeObject to ensure type safety
              const safeUser = safeObject<Profile>(user, {} as Profile);
              
              return (
                <TableRow key={safeUser.id}>
                  <TableCell>{safeUser.email}</TableCell>
                  <TableCell>{safeUser.company_name}</TableCell>
                  <TableCell>{safeUser.contact_name}</TableCell>
                  <TableCell>{safeUser.lp_groups?.name}</TableCell>
                  <TableCell>
                    {safeUser.is_admin && <span className="mr-2">Admin</span>}
                    {safeUser.is_lp && <span>LP</span>}
                  </TableCell>
                  <TableCell>
                    <div className="space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleUserRole(safeUser.user_id || '', "is_admin", !!safeUser.is_admin)}
                      >
                        Toggle Admin
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleUserRole(safeUser.user_id || '', "is_lp", !!safeUser.is_lp)}
                      >
                        Toggle LP
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
