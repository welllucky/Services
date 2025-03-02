"use client";

import { TicketDto } from "@/types";
import { useTheme } from "styled-components";
import { TicketsPageUI } from "./UI";

interface TicketsPageUIProps {
  data?: TicketDto[];
}

const TicketsPage = ({ data }: TicketsPageUIProps) => {
  const theme = useTheme();

  return (
    <TicketsPageUI
      data={data}
      theme={theme}
    />
  );
};

export { TicketsPage };
