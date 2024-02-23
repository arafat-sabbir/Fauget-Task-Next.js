"use client"
import { useSession } from "next-auth/react";
import React from "react";

const Setting = () => {
  const {data:session} = useSession()
  return (
    <div>
      <p>Name : {session?.user?.username}</p>
      <p> Email : {session?.user?.email}</p>
    </div>
  );
};

export default Setting;
