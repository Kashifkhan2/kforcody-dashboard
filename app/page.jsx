"use client";
import React from "react";
import Home from "./components/Home";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";

const Page = () => {
  const cookies = useCookies();
  const { push } = useRouter();
  const cok = cookies.get("authUser");
  if (!cok) {
    push("/pages/sign");
  }

  return (
    <div>
      <Home />
    </div>
  );
};

export default Page;
