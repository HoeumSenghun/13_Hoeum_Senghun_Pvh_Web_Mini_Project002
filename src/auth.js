import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginService } from "./service/login-service";


export const { signIn, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        const res = await loginService(
          email, 
          password,
        );
        console.log("res in auth.js :", res)
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

});