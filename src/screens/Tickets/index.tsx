"use client";

import { useTheme } from "styled-components";
import { TicketsPageUI } from "./UI";

const TicketsPage = () => {
  const theme = useTheme();

  return <TicketsPageUI theme={theme} />;
};

export { TicketsPage };
