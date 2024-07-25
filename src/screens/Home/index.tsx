"use client";

import { cookie, ticketApi } from "@/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTheme } from "styled-components";
import { HomePageUI } from "./UI";

const Homepage = () => {
  const theme = useTheme();
  const router = useRouter();
  const { data, isLoading } = ticketApi.getTickets();
  const token = cookie.get("token");

  useEffect(() => {
    if (!token) cookie.set("token", "2");
  });

  return (
    <HomePageUI
      data={data}
      isLoading={isLoading}
      router={router}
      theme={theme}
    />
  );
};

export { Homepage };
