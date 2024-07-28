"use client";

import { useMemo } from "react";

export type ICreateTicketFlowPage = {
  page: string;
  title: string;
  hasBackButton?: boolean;
};

export const useCreateTicketFlow = (
  pathName: string,
  pages: ICreateTicketFlowPage[],
) => {
  const actualPage = useMemo(
    () => pages.find((page) => page.page === pathName),
    [pathName, pages],
  );

  const indexPageFinder = useMemo(
    () => pages.indexOf(actualPage as unknown as ICreateTicketFlowPage),
    [actualPage, pages],
  );

  const nextPage = useMemo(
    () =>
      (indexPageFinder === -1
        ? {
            page: "/chamado",
            title: "chamado",
          }
        : pages[indexPageFinder + 1]),
    [indexPageFinder, pages],
  );

  const previousPage = useMemo(
    () =>
      (indexPageFinder === 0
        ? {
            page: "/",
            title: "Home",
          }
        : pages[indexPageFinder - 1]),
    [indexPageFinder, pages],
  );

  return {
    actualPage,
    nextPage,
    previousPage,
  };
};
