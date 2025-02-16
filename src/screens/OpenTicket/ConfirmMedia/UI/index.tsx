"use client";

import { CustomFieldset } from "@/components";
import { IOpenTicketForm } from "@/types";
import { buildTestIds, dataFormatter } from "@/utils";
import { DefaultTheme } from "styled-components";
import { ConfirmDetailsContainer, SectionInfoForm } from "../styles";

type ConfirmMediaPageUiProps = {
  theme: DefaultTheme;
  data: IOpenTicketForm;
};

export const ConfirmMediaPageUI = ({
  theme,
  data,
}: ConfirmMediaPageUiProps) => (
  <ConfirmDetailsContainer
    {...buildTestIds("confirm-details-container")}
    $gap="8px">
    <SectionInfoForm {...buildTestIds("section-info-form")}>
      <CustomFieldset
        color={theme.colors.primary.default}
        labelText="Resumo"
        $minHeight="56px"
        $maxHeight="80px"
        padding="0px 16px"
        $alignItems="center">
        {data?.resume}
      </CustomFieldset>
    </SectionInfoForm>
    <SectionInfoForm $gap="16px">
      <CustomFieldset
        color={theme.colors.primary.default}
        labelText="Tipo"
        $minHeight="56px"
        padding="0px 16px"
        $alignItems="center">
        {data?.type}
      </CustomFieldset>
      <CustomFieldset
        color={theme.colors.primary.default}
        labelText="Prioridade"
        width="60%"
        padding="0px 16px"
        $alignItems="center"
        $minHeight="56px">
        {data?.priority}
      </CustomFieldset>
    </SectionInfoForm>
    <SectionInfoForm>
      <CustomFieldset
        color={theme.colors.primary.default}
        labelText="Data do ocorrido"
        $alignItems="center"
        padding="0px 16px"
        $minHeight="56px">
        {dataFormatter(data?.date)}
      </CustomFieldset>
    </SectionInfoForm>
    <SectionInfoForm>
      <CustomFieldset
        color={theme.colors.primary.default}
        labelText="Descrição"
        $minHeight="160px"
        padding="16px"
        $maxHeight="240px"
        $alignItems="start">
        {data?.description}
      </CustomFieldset>
    </SectionInfoForm>
  </ConfirmDetailsContainer>
);
