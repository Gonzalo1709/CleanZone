import NextAuth from "next-auth";
import type { DefaultSession, NextAuthOptions, Session } from "next-auth";
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
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        token.accessToken = account?.access_token;
        token.id_token = account?.id_token;
      }
      return token;
    },
    async session({ session, token, user }): Promise<Session | DefaultSession> {
      (session as any).token = token;
      return session;
    },
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET!,
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
