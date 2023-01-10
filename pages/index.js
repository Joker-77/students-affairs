import React from "react";
import Router from "next/router";
import {
  setSessionKey,
  useAppDispatch,
  useAppSelector,
  selectSessionKey,
} from "../redux";

export default function Index() {
  const _sessionKey = useAppSelector(selectSessionKey);

  if (!!_sessionKey) {
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
