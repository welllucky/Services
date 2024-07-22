"use client";

import { IOpenTicketForm } from "@/app/(protected)/(form)/template";
import { ConfirmModal, CustomFieldset } from "@/components";
import {
  buildTestIds,
  dataFormatter,
  LS_KEY_1_TICKET_RECORD,
  SS_KEY_USER_PREVIOUS_PAGE,
  useModalStore,
} from "@/utils";
import { useEffect } from "react";
import { useTheme } from "styled-components";
import { ConfirmDetailsContainer, SectionInfoForm } from "./styles";

export const ConfirmDetailsPage = () => {
  const theme = useTheme();
  const ticketData: IOpenTicketForm = JSON.parse(
    localStorage.getItem(LS_KEY_1_TICKET_RECORD) as unknown as string,
  );
  const isModalOpen = useModalStore((state) => state.isOpen);
  const modalCallback = useModalStore((state) => state.modalCallback);

  useEffect(
    () => () => {
      sessionStorage.setItem(SS_KEY_USER_PREVIOUS_PAGE, "form");
    },
    [],
  );

  return (
    <>
      <ConfirmModal
        isOpen={isModalOpen}
        testId="confirm-issue-modal"
        successText="Chamado registrado com sucesso!"
        confirmationText="Deseja realmente abrir
        o chamado?"
        hasBackButton
        confirmCallBack={modalCallback}
      />
      <ConfirmDetailsContainer
        {...buildTestIds("confirm-details-container")}
        $gap="16px">
        <SectionInfoForm {...buildTestIds("section-info-form")}>
          <CustomFieldset
            color={theme.colors.primary.default}
            labelText="Resumo"
            width="100%"
            height="64px">
            {ticketData?.resumo}
          </CustomFieldset>
        </SectionInfoForm>
        <SectionInfoForm $gap="16px">
          <CustomFieldset
            color={theme.colors.primary.default}
            labelText="Tipo"
            width="48%"
            height="64px">
            {ticketData?.tipo}
          </CustomFieldset>
          <CustomFieldset
            color={theme.colors.primary.default}
            labelText="Prioridade"
            width="48%"
            height="64px">
            {ticketData?.prioridade}
          </CustomFieldset>
        </SectionInfoForm>
        <SectionInfoForm>
          <CustomFieldset
            color={theme.colors.primary.default}
            labelText="Data do ocorrido"
            width="100%"
            height="64px">
            {dataFormatter(ticketData?.data)}
          </CustomFieldset>
        </SectionInfoForm>
        <SectionInfoForm>
          <CustomFieldset
            color={theme.colors.primary.default}
            labelText="Descrição"
            width="100%"
            height="240px"
            $hasOverflow>
            {ticketData?.descricao}
          </CustomFieldset>
        </SectionInfoForm>
      </ConfirmDetailsContainer>
    </>
  );
};
