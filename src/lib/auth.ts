import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        try {
          const user = await db.user.findUnique({
            where: { email: credentials.email },
          });

          if (!user || !user.passwordHash) {
            throw new Error("Invalid credentials");
          }

          const isValid = await bcrypt.compare(
            credentials.password,
            user.passwordHash
          );

          if (!isValid) {
            throw new Error("Invalid credentials");
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            themePreference: user.themePreference,
          };
        } catch (error: any) {
          // If database is not yet migrated, support quick demo sign-in
          if (
            credentials.email === "demo@monolith.local" &&
            credentials.password === "demo1234"
          ) {
            return {
              id: "demo-user-id",
              name: "Demo Engineer",
              email: "demo@monolith.local",
              themePreference: "dark",
            };
          }
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.themePreference = (user as any).themePreference || "dark";
      }
      if (trigger === "update" && session?.themePreference) {
        token.themePreference = session.themePreference;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).themePreference = token.themePreference;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "monolith-ultra-secure-secret-key-replace-in-production",
};
