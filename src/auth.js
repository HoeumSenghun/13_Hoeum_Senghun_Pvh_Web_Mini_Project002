import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginService } from "./services/auth-service";

export const { auth, signOut, signIn } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        const res = await loginService({ email, password });
        return res;
      },
    }),
  ],
  callbacks: {
    async jwt(token) {
      return token;
    },
    async session(props) {
      const { token } = props;
      return token.token.user;
    },
  },
  strategy: "jwt",

  pages: {
    signIn: "/login",
  },
});