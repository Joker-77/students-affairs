import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "../../../Services/ApiClient";
import {
  selectSessionKey,
  useAppDispatch,
  useAppSelector,
  setSessionKey,
  selectDirection,
} from "../../../redux";
import { SignInResponse } from "next-auth/react";
import { IUserSignInResponse } from "../../../Models/ApiResponse/UserSignInResponse";
//Api route function that is returned from next auth
const authOptions: NextAuthOptions = {
  secret: process.env.NextAuth_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials, req) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };
        const res = await axios
          .post(`${process.env.BASE_URL}/api/login`, payload)
          .then(function (response) {
            return response.data;
          })
          .catch(function (error) {
            throw new Error(error);
          });
        let _user = null;
        const data = res as IUserSignInResponse;
        if (data.success) {
          _user = {
            id: data.result.id,
            email: data.result.email,
            token: data.result.token,
          };
          return _user;
        } else {
          throw new Error("Invalid Credentials");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/authentication/sign-in",
  },
};
export default NextAuth(authOptions);
