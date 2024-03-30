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

  // async function getData(): Promise<Clients[]> {
  //   return new Array(3).fill(null).map(() => ({
  //     name: "test",
  //     company: "test",
  //     email: "test@test.com",
  //     phone: 9937829,
  //   }));
  // }

  // const test = await getData();
  // console.log(test);

  async function getData() {
    const res = await fetch(
      "https://q8y3gkmsnf.execute-api.us-east-1.amazonaws.com/dev/getBookings?TableName=bookings"
    );
    const data = await res.json();

    // format data
    const formattedArrayOfObjects = data.Items.map((obj) => {
      const extractedValues = {};
      for (const key in obj) {
        const value = obj[key];
        extractedValues[key] = Object.values(value)[0];
      }
      return extractedValues;
    });
    return formattedArrayOfObjects;
  }
  const data = await getData();
  console.log(data);

  return (
    <AuthProvider>
      <div>
        Dashboard Page
        <div>
          <SignInButton />
          <SignOutButton />
        </div>
        <div className="h-[500px] bg-slate-100">
          <DataTable columns={columns} data={data} />
          {/* <TableDemo /> */}
          {/* <DataTableDemo /> */}
        </div>
      </div>
    </AuthProvider>
  );
};

export default Dashboard;
