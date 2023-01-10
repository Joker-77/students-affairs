import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { ApiResponse } from "../../../Models/ApiResponse/ApiResponse";
import axios from "../../../Services/ApiClient";
//Api route function that is returned from next auth
export default NextAuth({
  logger: {
    error(code, metadata) {
      console.log({ type: "inside error logger", code, metadata });
    },
    warn(code) {
      console.log({ type: "inside warn logger", code });
    },
    debug(code, metadata) {
      console.log({ type: "inside debug logger", code, metadata });
    },
  },
  providers: [
    CredentialsProvider({
      id: "Hiast",
      name: "Hiast",
      async authorize(credentials, req) {
        const payload = {
          // userName: credentials.user,
          email: credentials.username,
          password: credentials.password,
        };
        console.log("Starting the signup/login process ---");
        const response = await axios
          .post("/login", payload)
          .then((resp) => {
            console.log("resp", resp);
            if (resp.data.success) return resp.data;
            else console.log(resp.data.error);
          })
          .catch((error) => {
            console.log("error resp", error);
          });
        // credentials will to passed from our login form
        // Your own logic here either check agains database or api endpoint
        // e.g. verify password if valid return user object.
        console.log("Credentials", response);
        if (response && response.success) {
          let _user = {
            name: response.result.userName,
            img: response.result.image,
            email: response.result.email,
            token: response.result.token,
          };
          return _user;
        } else return null;
      },
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    // called after sucessful signin
    jwt: async ({ token, user }) => {
      console.log("fire jwt Callback");
      console.log("token", token);
      console.log("user", user);
      user && (token.user = user);
      if (user)
        return {
          ...token,
          accessToken: user.token,
        };
      return token;
    }, // called whenever session is checked
    session: async ({ session, token }) => {
      console.log("fire SESSION Callback");
      console.log("token", token);
      console.log("session", session);
      token && (session.user = token.user);
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: "/authentication/sign-in",
});
