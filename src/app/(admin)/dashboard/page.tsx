import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import AuthProvider from "../authprovider";
import { SignInButton, SignOutButton } from "@/components/buttons";
import { TableDemo } from "./components/table";
import { DataTableDemo } from "./components/data-table";
import { DataTable } from "./components/table/new-table";

import { columns, Clients } from "./components/table/columns";
import axios from "axios";

const Dashboard = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  async function getData() {
    const res = await fetch(
      "https://q8y3gkmsnf.execute-api.us-east-1.amazonaws.com/dev/getBookings?TableName=bookings"
    );
    const data = await res.json();

    // format data
    const formattedArrayOfObjects = data.Items.map((obj: any) => {
      const extractedValues = {};
      for (const key in obj) {
        const value = obj[key];
        //@ts-ignore
        extractedValues[key] = Object.values(value)[0];
      }
      return extractedValues;
    });
    return formattedArrayOfObjects;
  }
  const data = await getData();
  // console.log(data);

  return (
    <AuthProvider>
      <div className="px-2 h-[100vh]">
        <div>
          {/* <SignInButton /> */}
          {/* <SignOutButton /> */}
        </div>
        <div className="h-[500px]">
          <DataTable columns={columns} data={data} />
          {/* <TableDemo /> */}
          {/* <DataTableDemo /> */}
        </div>
      </div>
    </AuthProvider>
  );
};

export default Dashboard;
