import NextAuth from "next-auth";
import type { NextAuthOptions, Session } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions: NextAuthOptions = {
  
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID!,
      clientSecret: process.env.COGNITO_CLIENT_SECRET!,
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async session({ session, token, user }) {
      interface CustomSession extends Session {
        authorizeToken: string;
      }
      const customSession: CustomSession = session as unknown as CustomSession;
      customSession.authorizeToken = (token as any).authorizeToken;
      return customSession;
    },
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET!,
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
