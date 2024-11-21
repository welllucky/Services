"use client";

import { ticketApi } from "@/utils";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { TicketsPageUI } from "./UI";

const TicketsPage = async () => {
  const theme = useTheme();
  const [shouldFetch, setShouldFetch] = useState(true);

  const { data, isLoading, error } = ticketApi.getTickets(shouldFetch);

  useEffect(() => {
    if (error || isLoading) {
      setShouldFetch(false);
    }
  }, [error, isLoading]);

  return (
    <TicketsPageUI
      data={data}
      isLoading={isLoading}
      theme={theme}
    />
  );
};

export { TicketsPage };
