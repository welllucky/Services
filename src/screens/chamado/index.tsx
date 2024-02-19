"use client";

import { BackButton, InfoHistoryPainel, Loading } from "@/components";
import { IssuePageContainer, IssuePageContent } from "./styles";
import { Row, TitleComponent } from "@/styles";
import { useEffect } from "react";
import { buildTestIds, dataFormatter, resetForm } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { CustomFieldset } from "@/components/Fieldset";
import { useTheme } from "styled-components";
import { SectionInfoForm } from "../abrir-chamado/confirmar-chamado/styles";
import { chamado } from "@/utils";

export interface IssuePageProps {
  id: string;
}

const IssuePage = ({ id }: IssuePageProps) => {
  useEffect(() => {
    resetForm();
  }, []);

  const router = useRouter();
  const theme = useTheme();
  const { data, isLoading } = chamado.getChamado(id);

  console.log(data);

  if (isLoading) {
    return <Loading overlayOn />;
  }

  return (
    <IssuePageContainer $full>
      <Row>
        <BackButton
          onClick={() => router.push("/")}
          actionText="chamados"
        />
      </Row>
      <Row>
        <TitleComponent>{`Chamado n° ${data?.id}`}</TitleComponent>
      </Row>
      <IssuePageContent
        {...buildTestIds("content-column")}
        height="100%">
        <CustomFieldset
          color={theme.colors.primary.default}
          labelText="Resumo"
          width="100%"
          height="64px"
          $justifyContent="center">
          {data?.resume}
        </CustomFieldset>
        <CustomFieldset
          color={theme.colors.primary.default}
          labelText="Descrição"
          width="100%"
          height="160px"
          $hasOverflow
          $justifyContent="start">
          {data?.description}
        </CustomFieldset>
        <SectionInfoForm $gap="16px">
          <CustomFieldset
            color={theme.colors.primary.default}
            labelText="Tipo"
            width="59%"
            height="64px">
            {data?.priority}
          </CustomFieldset>
          <CustomFieldset
            color={theme.colors.primary.default}
            labelText="Prioridade"
            width="36%"
            height="64px">
            {data?.priority}
          </CustomFieldset>
        </SectionInfoForm>
        <CustomFieldset
          color={theme.colors.primary.default}
          labelText="Data do ocorrido"
          width="100%"
          height="64px">
          {dataFormatter(data?.date as string)}
        </CustomFieldset>
        <InfoHistoryPainel
          data={data?.historic || []}
          isLoading={isLoading}
        />
      </IssuePageContent>
    </IssuePageContainer>
  );
};

export { IssuePage };
