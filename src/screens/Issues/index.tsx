"use client";

import { useTheme } from "styled-components";
import { IssuesPageUI } from "./UI";

const RequestsPage = () => {
  const theme = useTheme();

  return <IssuesPageUI theme={theme} />;
};

export { RequestsPage };
