import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions: NextAuthOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID!,
      clientSecret: process.env.COGNITO_CLIENT_SECRET!,
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
  // providers: [
  //   GithubProvider({
  //     clientId: process.env.GITHUB_ID!,
  //     clientSecret: process.env.GITHUB_SECRET!,
  //   }),
  // ]
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
