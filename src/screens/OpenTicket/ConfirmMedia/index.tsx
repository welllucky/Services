"use client";

import { ConfirmModal, CustomFieldset } from "@/components";
import { IOpenTicketForm } from "@/types";
import {
  buildTestIds,
  dataFormatter,
  LS_KEY_1_TICKET_RECORD,
  SS_KEY_USER_PREVIOUS_PAGE,
  ticketApi,
  useModalStore,
} from "@/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTheme } from "styled-components";
import { ConfirmDetailsContainer, SectionInfoForm } from "./styles";

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

  console.log({ data });
  useEffect(() => {
    if (data?.id) {
      setCanRegisterTicket(false);
      setTimeout(() => {
        console.log("Redirecionou para o chamado");
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
    <>
      <ConfirmModal
        isOpen={isModalOpen}
        testId="confirm-issue-modal"
        successText="Chamado registrado com sucesso!"
        confirmationText="Deseja realmente abrir
        o chamado?"
        hasBackButton
        confirmCallBack={() => setCanRegisterTicket(true)}
      />
      <ConfirmDetailsContainer
        {...buildTestIds("confirm-details-container")}
        $gap="16px">
        <SectionInfoForm {...buildTestIds("section-info-form")}>
          <CustomFieldset
            color={theme.colors.primary.default}
            labelText="Resumo"
            width="100%"
            minHeight="64px">
            {ticketData?.resume}
          </CustomFieldset>
        </SectionInfoForm>
        <SectionInfoForm $gap="16px">
          <CustomFieldset
            color={theme.colors.primary.default}
            labelText="Tipo"
            width="48%"
            minHeight="64px">
            {ticketData?.type}
          </CustomFieldset>
          <CustomFieldset
            color={theme.colors.primary.default}
            labelText="Prioridade"
            width="48%"
            minHeight="64px">
            {ticketData?.priority}
          </CustomFieldset>
        </SectionInfoForm>
        <SectionInfoForm>
          <CustomFieldset
            color={theme.colors.primary.default}
            labelText="Data do ocorrido"
            width="100%"
            minHeight="64px">
            {dataFormatter(ticketData?.date)}
          </CustomFieldset>
        </SectionInfoForm>
        <SectionInfoForm>
          <CustomFieldset
            color={theme.colors.primary.default}
            labelText="Descrição"
            width="100%"
            minHeight="240px"
            $hasOverflow>
            {ticketData?.description}
          </CustomFieldset>
        </SectionInfoForm>
      </ConfirmDetailsContainer>
    </>
  );
};
