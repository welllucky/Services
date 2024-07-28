"use client";

import { ticketApi } from "@/utils";
import { useRouter } from "next/navigation";
import { useTheme } from "styled-components";
import { TicketsPageUI } from "./UI";

const MyCallsPage = () => {
  const theme = useTheme();
  const router = useRouter();
  const { data, isLoading } = ticketApi.getTickets();

  return (
    <TicketsPageUI
      isLoading={isLoading}
      data={data}
      router={router}
      theme={theme}
    />
  );
};

export { MyCallsPage };
