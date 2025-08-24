"use client";

import { useTheme } from "styled-components";

import { TicketDto } from "@/types";

import TicketsPageUI from "./UI";

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

export default TicketsPage;
