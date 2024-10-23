"use client";

import { IOpenTicketForm } from "@/types";
import {
  LS_KEY_1_TICKET_RECORD,
  SS_KEY_USER_PREVIOUS_PAGE,
  ticketApi,
  useModalStore,
} from "@/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTheme } from "styled-components";
import { ConfirmMediaPageUI } from "./UI";

export const ConfirmDetailsPage = () => {
  const ticketData: IOpenTicketForm = JSON.parse(
    localStorage?.getItem(LS_KEY_1_TICKET_RECORD) as unknown as string,
  );
  const [canRegisterTicket, setCanRegisterTicket] = useState<boolean>(false);
  const isModalOpen = useModalStore((state) => state.isOpen);
  const { push } = useRouter();
  const theme = useTheme();

  useEffect(
    () => () => {
      sessionStorage.setItem(SS_KEY_USER_PREVIOUS_PAGE, "form");
    },
    [],
  );

  const { data, error } = ticketApi.createTicket(ticketData, canRegisterTicket);

  useEffect(() => {
    if (data?.id) {
      setCanRegisterTicket(false);
      setTimeout(() => {
        push(`/chamado/${data?.id}`);
      }, 3000);
    }

    if (error) {
      toast.error("Erro ao registrar chamado. Tente novamente.");
      push("/");
    }

    return () => {
      setCanRegisterTicket(false);
    };
  }, [data?.id, error, push]);

  return (
    <ConfirmMediaPageUI
      theme={theme}
      data={ticketData}
      isModalOpen={isModalOpen}
      modalCallback={() => setCanRegisterTicket(true)}
    />
  );
};
