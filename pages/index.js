import React from "react";
import Router from "next/router";
import { useAppSelector, selectSessionKey } from "../redux";

export default function Index() {
  const _sessionKey = useAppSelector(selectSessionKey);
  console.log("_sessionKey", _sessionKey);
  if (
    !!_sessionKey ||
    (typeof window !== "undefined" && !!localStorage.getItem("sa_access_token"))
  ) {
    React.useEffect(() => {
      Router.push("/students_affairs/dashboard");
    });
  } else {
    React.useEffect(() => {
      Router.push("/authentication/sign-in");
    });
  }
  return <div />;
}
