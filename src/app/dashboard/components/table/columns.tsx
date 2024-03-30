"use client";
import { ColumnDef } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export type Clients = {
  name: string;
  company: string;
  email: string;
  phone: number;
};

export const columns: ColumnDef<Clients>[] = [
  {
    accessorKey: "personaContacto",
    header: "Name",
  },
  {
    accessorKey: "nombreEmpresa",
    header: "Company",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "telefonoContacto",
    header: "Phone Number",
  },
  // {
  //   accessorKey: "moreInfo",
  //   header: "More Info",
  //   enableHiding: false,
  // },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
