import React, { Children, useEffect } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  selectSessionKey,
  useAppDispatch,
  useAppSelector,
  setSessionKey,
  selectDirection,
} from "../../redux";

export default function AuthProvider({ children }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  const dispatch = useAppDispatch();
  const sessionKey = useAppSelector(selectSessionKey);
  console.log("session", status, session);
  // function isTokenExpired(token) {
  //   const base64Url = token.split(".")[1];
  //   const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  //   const jsonPayload = decodeURIComponent(
  //     atob(base64)
  //       .split("")
  //       .map(function (c) {
  //         return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  //       })
  //       .join("")
  //   );

  //   const { exp } = JSON.parse(jsonPayload);
  //   const expired = Date.now() >= exp * 1000;
  //   return expired;
  // }
  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!isUser) router.push("/authentication/sign-in"); //Redirect to login
    if (!sessionKey && isUser && session.user.token) {
      let _token = localStorage.getItem("sa_access_token");
      if (_token == null || _token == undefined) {
        localStorage.setItem("sa_access_token", session.user.token);
      }
      // if (isTokenExpired(_token)) {
      //   localStorage.setItem("sa_access_token", session.user.token);
      // }
      dispatch(setSessionKey(session.user.token));
    }
  }, [isUser, status]);

  if (isUser) return children;
  return <div>Loading...</div>;
}
