"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function SignInButton() {
  const { data: session, status } = useSession();
  // console.log(session, status);

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return <Link href={`/dashboard`}></Link>;
  }

  return (
    <button onClick={() => signIn('email', { callbackUrl: "/dashboard" })}>
      Sign in
    </button>
  );
}

export function SignOutButton() {
  return <Button onClick={() => signOut()} className="bg-red-600 p-2 text-white">Sign out</Button>;
}
