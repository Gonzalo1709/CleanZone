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
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { DialogDemo } from "../modal";

export type Clients = {
  name: string;
  company: string;
  email: string;
  phone: number;
};

export const columns: ColumnDef<Clients>[] = [
  {
    accessorKey: "personaContacto",

    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
  {
    accessorKey: "creationDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      //@ts-ignore
      const dateString = row.original.creationDate;
      // Convert the string to a Date object
      var date = new Date(dateString);

      // Subtract 4 hours (Florida Time)
      date.setTime(date.getTime() - 4 * 60 * 60 * 1000);
      var formattedDate = date.toLocaleString();


      return <div>{formattedDate} GMT-4</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      // console.log(row.original);
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
            {/* <DropdownMenuSeparator /> */}
            {/* @ts-ignore */}
            <DialogDemo info={row.original} />
            {/* <Button onClick={() => console.log(row.original)}>test</Button> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
