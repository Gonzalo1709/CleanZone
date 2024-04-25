import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import AuthProvider from "../authprovider";
import { SignInButton, SignOutButton } from "@/components/buttons";
import { DataTable } from "./components/table/new-table";

import { columns, Clients } from "./components/table/columns";
import axios from "axios";

const Dashboard = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  // console.log(data);

  return (
    <AuthProvider>
      <div className="px-2 h-[100vh]">
        <div>
          {/* <SignInButton /> */}
          {/* <SignOutButton /> */}
        </div>
        <div className="h-[500px]">
          <DataTable columns={columns} />
          {/* <DataTableDemo /> */}
        </div>
      </div>
    </AuthProvider>
  );
};

export default Dashboard;
