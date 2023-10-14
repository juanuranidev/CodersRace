import React from "react";
import { ScreenLoader } from "components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AUTH } from "lib";

type Props = {};

function AuthHandler({ auth, children }: any) {
  const { status } = useSession();
  const router = useRouter();

  if (status === AUTH.STATES.LOADING) {
    return <ScreenLoader />;
  }

  if (status !== AUTH.STATES.AUTHENTICATED) {
    router.push(auth.unauthorized);
    return null;
  }

  return children;
}

export default AuthHandler;
