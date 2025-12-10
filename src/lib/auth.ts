import { getServerSession } from "next-auth";
import type { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import prisma from "@/lib/prisma";
import type { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<string, string> | undefined) {
        const { email, password } = credentials ?? {};

        if (!email || !password) {
          return null;
        }

        const admin = await prisma.adminUser.findUnique({
          where: { email: email.toLowerCase() },
        });

        if (!admin) {
          return null;
        }

        const isValid = await compare(password, admin.password);

        if (!isValid) {
          return null;
        }

        return {
          id: admin.id,
          email: admin.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }): Promise<JWT> {
      if (user && typeof user === "object") {
        const id = "id" in user ? (user.id as string | undefined) : undefined;
        const email = "email" in user ? (user.email as string | undefined) : undefined;

        if (id) {
          token.id = id;
        }

        if (email) {
          token.email = email;
        }
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
      if (session.user && token.id) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
};

export function getAuthSession() {
  return getServerSession(authOptions);
}
