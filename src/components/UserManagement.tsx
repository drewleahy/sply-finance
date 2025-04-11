
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
import { unwrapResult } from "@/utils/supabaseHelpers";

type Profile = Database['public']['Tables']['profiles']['Row'] & {
  lp_groups?: {
    name: string;
  }
};

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
      const updateData: Partial<Database['public']['Tables']['profiles']['Update']> = {
        [field]: !currentValue
      };
      
      const { error } = await supabase
        .from("profiles")
        .update(updateData)
        .eq("user_id", userId);

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
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.company_name}</TableCell>
                <TableCell>{user.contact_name}</TableCell>
                <TableCell>{user.lp_groups?.name}</TableCell>
                <TableCell>
                  {user.is_admin && <span className="mr-2">Admin</span>}
                  {user.is_lp && <span>LP</span>}
                </TableCell>
                <TableCell>
                  <div className="space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleUserRole(user.user_id || '', "is_admin", !!user.is_admin)}
                    >
                      Toggle Admin
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleUserRole(user.user_id || '', "is_lp", !!user.is_lp)}
                    >
                      Toggle LP
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
