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

  React.useEffect(() => {
    if (session?.status === "unauthenticated")
      router.push("/authentication/sign-in");
    localStorage.setItem("sa_access_token", session.data?.user?.token);
  });

  if (isUser) return children;
  return <div>Loading...</div>;
}
