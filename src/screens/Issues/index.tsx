"use client";

import { TicketDto } from "@/types";
import { useTheme } from "styled-components";
import { IssuesPageUI } from "./UI";

const RequestsPage = () => {
  const theme = useTheme();
  const isLoading = false;
  const listaChamados = [] as TicketDto[];

  return (
    <IssuesPageUI
      data={listaChamados}
      isLoading={isLoading}
      theme={theme}
    />
  );
};

export { RequestsPage };
