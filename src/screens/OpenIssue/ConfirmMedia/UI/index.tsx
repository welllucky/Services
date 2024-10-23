"use client";

import { ConfirmModal, CustomFieldset } from "@/components";
import { IOpenIssueForm } from "@/types";
import { buildTestIds, dataFormatter } from "@/utils";
import { DefaultTheme } from "styled-components";
import { ConfirmDetailsContainer, SectionInfoForm } from "../styles";

type ConfirmMediaPageUiProps = {
  isModalOpen: boolean;
  modalCallback: () => void;
  theme: DefaultTheme;
  data: IOpenIssueForm;
};

export const ConfirmMediaPageUI = ({
  isModalOpen,
  modalCallback,
  theme,
  data,
}: ConfirmMediaPageUiProps) => (
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
    //   overflow
      $gap="8px">
      <SectionInfoForm {...buildTestIds("section-info-form")}>
        <CustomFieldset
          color={theme.colors.primary.default}
          labelText="Resumo"
          width="100%"
          $minHeight="56px"
          $maxHeight="80px"
          $hasOverflow>
          {data?.resume}
        </CustomFieldset>
      </SectionInfoForm>
      <SectionInfoForm $gap="16px">
        <CustomFieldset
          color={theme.colors.primary.default}
          labelText="Tipo"
          width="100%"
          $minHeight="56px">
          {data?.type}
        </CustomFieldset>
        <CustomFieldset
          color={theme.colors.primary.default}
          labelText="Prioridade"
          width="60%"
          $minHeight="56px">
          {data?.priority}
        </CustomFieldset>
      </SectionInfoForm>
      <SectionInfoForm>
        <CustomFieldset
          color={theme.colors.primary.default}
          labelText="Data do ocorrido"
          width="100%"
          $minHeight="56px">
          {dataFormatter(data?.date)}
        </CustomFieldset>
      </SectionInfoForm>
      <SectionInfoForm>
        <CustomFieldset
          color={theme.colors.primary.default}
          labelText="Descrição"
          width="100%"
          $minHeight="160px"
          $maxHeight="240px"
          $hasOverflow>
          {data?.description}
        </CustomFieldset>
      </SectionInfoForm>
    </ConfirmDetailsContainer>
  </>
);
