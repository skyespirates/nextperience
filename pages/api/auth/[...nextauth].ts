import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        if (username !== "skyes07" || password !== "1234") {
          throw new Error("Invalid credentials!");
        }
        return {
          id: "1234",
          username: "skyes07",
          age: 23,
          email: "skyes07@gmail.com",
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/signup",
  },
};
export default NextAuth(authOptions);
