"use client";

import { BackButton } from "@/components";
import { IssuePageContainer } from "@/screens/chamado/styles";
import { Column, Row, TitleComponent } from "@/styles";
import { FormButtons } from "@/components/Form";
import { ReactNode, useCallback, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { buildTestIds } from "@/utils/functions";
import {
  LS_KEY_1_TICKET_RECORD,
  LS_KEY_2_TICKET_RECORD,
  LS_KEY_3_TICKET_RECORD,
  SS_KEY_DATA_WAS_RECOVERY
} from "@/utils/alias";

interface PageRouterData {
  page: string;
  title: string;
  hasBackButton?: boolean;
}

export interface IOpenTicketForm {
  resumo: string;
  descricao: string;
  data: string;
  tipo: string;
}

export default function Template({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const { push, back } = useRouter();
  const pagesTitles: PageRouterData[] = [
    {
      page: "/abrir-chamado",
      title: "O que aconteceu?",
      hasBackButton: false
    },
    {
      page: "/anexar-midia",
      title: "Anexar mídia",
      hasBackButton: true
    },
    {
      page: "/confirmar-chamado",
      title: "Confirmar informações",
      hasBackButton: true
    }
  ];

  const actualPage = useMemo(
    () => pagesTitles.find((page) => page.page === pathName),
    [pathName, pagesTitles]
  );

  const indexPageFinder = useMemo(() => {
    return pagesTitles.indexOf(actualPage as PageRouterData);
  }, [actualPage, pagesTitles]);

  const nextPageUrl = useMemo(() => {
    return indexPageFinder === -1
      ? "/"
      : indexPageFinder + 1 >= pagesTitles.length
        ? "/"
        : pagesTitles[indexPageFinder + 1].page;
  }, [pagesTitles]);

  const methods = useForm<IOpenTicketForm>({
    mode: "onChange",
    defaultValues: { resumo: "", descricao: "", data: "", tipo: "" },
    reValidateMode: "onChange",
    shouldFocusError: true,
    progressive: true
  });

  const resetForm = useCallback(() => {
    localStorage.removeItem(LS_KEY_1_TICKET_RECORD);
    localStorage.removeItem(LS_KEY_2_TICKET_RECORD);
    localStorage.removeItem(LS_KEY_3_TICKET_RECORD);
    sessionStorage.removeItem(SS_KEY_DATA_WAS_RECOVERY);
  }, [localStorage]);

  return (
    <FormProvider
      {...buildTestIds("form-provider")}
      {...methods}
      key="open-ticket-form">
      <IssuePageContainer
        {...buildTestIds("issue-page-container")}
        height="100%">
        <Row {...buildTestIds("back-button-row")}>
          <BackButton
            {...buildTestIds("back-button")}
            onClick={() => {
              if (actualPage?.page === pagesTitles[0].page) {
                resetForm();
                push("/");
              } else {
                back();
              }
            }}
            actionText="voltar"
          />
        </Row>
        <Column {...buildTestIds("content-column")} height="100%" $gap="12px">
          <TitleComponent {...buildTestIds("page-step-form-title")}>
            {actualPage?.title}
          </TitleComponent>
          {children}
          <FormButtons
            {...buildTestIds("form-buttons")}
            canNext={methods.formState.isValid}
            nextPage={nextPageUrl}
            hasBackButton={actualPage?.hasBackButton}
          />
        </Column>
      </IssuePageContainer>
    </FormProvider>
  );
}
