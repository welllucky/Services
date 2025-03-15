"use client";

import { LS_KEY_1_TICKET_RECORD } from "@/constraints";
import { TicketDto } from "@/types";
import { ticketApi, useAuth } from "@/utils";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import toast from "react-hot-toast";
import { recoverFormDataFromLocalStorage } from "../OpenTicket.utils";

export type ICreateIssueFlowPage = {
  page: string;
  title: string;
  hasBackButton?: boolean;
};

export const useCreateTicketFlow = (
  pathName: string,
  pages: ICreateIssueFlowPage[],
) => {
  const { accessToken } = useAuth();
  const { push } = useRouter();
  const actualPage = useMemo(
    () => pages.find((page) => page.page === pathName),
    [pathName, pages],
  );

  const indexPageFinder = useMemo(
    () => pages.indexOf(actualPage as unknown as ICreateIssueFlowPage),
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

  const sendTicketRegister = async () => {
    try {
      const formData = recoverFormDataFromLocalStorage();
      toast.loading("Registrando chamado...");
      const response = await fetch(ticketApi.createTicketUrl(), {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao registrar chamado. Tente novamente.");
      }

      const data = (await response.json()) as TicketDto;

      toast.dismiss();

      if (data?.id) {
        localStorage.removeItem(LS_KEY_1_TICKET_RECORD);
        toast.success("Chamado registrado com sucesso.");
        push(`/ticket/${data?.id}`);
      }
    } catch {
      push("/");
      toast.dismiss();
      toast.error("Erro ao registrar chamado. Tente novamente.");
    }
  };

  return {
    actualPage,
    nextPage,
    previousPage,
    sendTicketRegister,
  };
};
