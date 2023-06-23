import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
const Protected = () => {
  const { status, data } = useSession();
  console.log(data);
  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/signin");
  }, [status]);
  return (
    <div>You are in PROTECTED route! {JSON.stringify(data?.user, null, 2)}</div>
  );
};

export default Protected;
