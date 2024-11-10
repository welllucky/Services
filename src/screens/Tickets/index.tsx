"use client";

import { ticketApi } from "@/utils";
import { useTheme } from "styled-components";
import { TicketsPageUI } from "./UI";

const TicketsPage = async () => {
  const theme = useTheme();

  const { data, isLoading } = ticketApi.getTickets();

  return (
    <TicketsPageUI
      data={data}
      isLoading={isLoading}
      theme={theme}
    />
  );
};

export { TicketsPage };
