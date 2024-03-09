import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import AuthProvider from "../authprovider";
import { SignInButton, SignOutButton } from "@/components/buttons";

const Dashboard = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <AuthProvider>
      <div>
        Dashboard Page
        <div>
          <SignInButton />
          <SignOutButton />
        </div>
      </div>
    </AuthProvider>
  );
};

export default Dashboard;
