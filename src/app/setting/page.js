"use client";
import { useSession } from "next-auth/react";
import React from "react";

const Setting = () => {
  const { data: session } = useSession();
  return (
    <div>
      <p className="text-white font-semibold text-2xl">
        Name : {session?.user?.username}
      </p>
      <p className="text-white font-semibold text-2xl">
        {" "}
        Email : {session?.user?.email}
      </p>
    </div>
  );
};

export default Setting;
