"use client";

import { BackButton } from "@/components";
import { IssuePageContainer } from "@/screens/chamado/styles";
import { Column, Row, TitleComponent } from "@/styles";
import { FormButtons } from "@/components/Form";
import { ReactNode, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { buildTestIds, resetForm } from "@/utils/functions";
import { useModalStore } from "@/utils";

interface PageRouterData {
  page: string;
  title: string;
  hasBackButton?: boolean;
}

export interface IOpenTicketForm {
  resumo: string;
  descricao: string;
  prioridade: "baixa" | "media" | "alta";
  data: string;
  tipo: string;
}

const Template = ({ children }: Readonly<{ children: ReactNode }>) => {
  const pathName = usePathname();
  const { push, back } = useRouter();
  const shouldOpenModal = useModalStore((state) => state.open);
  const setModalCallback = useModalStore((state) => state.setModalCallback);
  const pagesTitles: PageRouterData[] = [
    {
      page: "/abrir-chamado",
      title: "O que aconteceu?",
      hasBackButton: false,
    },
    // {
    //   page: "/anexar-midia",
    //   title: "Anexar mídia",
    //   hasBackButton: true
    // },
    {
      page: "/confirmar-chamado",
      title: "Confirmar informações",
      hasBackButton: true,
    },
  ];

  const idChamado = 2400;

  const actualPage = useMemo(
    () => pagesTitles.find((page) => page.page === pathName),
    [pathName, pagesTitles],
  );

  const indexPageFinder = useMemo(
    () => pagesTitles.indexOf(actualPage as PageRouterData),
    [actualPage, pagesTitles],
  );

  const nextPageUrl = useMemo(
    // eslint-disable-next-line no-confusing-arrow
    () =>
      indexPageFinder === -1
        ? "/"
        : indexPageFinder + 1 >= pagesTitles.length
          ? `/chamado/${idChamado}`
          : pagesTitles[indexPageFinder + 1].page,
    [pagesTitles],
  );

  const previousPageUrl = useMemo(
    () => (indexPageFinder === 0 ? "" : pagesTitles[indexPageFinder - 1].title),
    [pagesTitles],
  );

  const methods = useForm<IOpenTicketForm>({
    mode: "onChange",
    defaultValues: {
      resumo: "",
      descricao: "",
      data: "",
      tipo: "",
      prioridade: "baixa",
    },
    reValidateMode: "onChange",
    shouldFocusError: true,
    progressive: true,
  });

  useEffect(() => {
    setModalCallback(() => push(`/chamado/${idChamado}`));
  }, []);

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
            actionText={
              actualPage?.page === pagesTitles[0].page
                ? "voltar"
                : previousPageUrl
            }
          />
        </Row>
        <Column
          {...buildTestIds("content-column")}
          height="100%"
          $gap="12px">
          <TitleComponent {...buildTestIds("page-step-form-title")}>
            {actualPage?.title}
          </TitleComponent>
          {children}
          <FormButtons
            {...buildTestIds("form-buttons")}
            canNext={methods.formState.isValid}
            nextPage={nextPageUrl}
            hasBackButton={actualPage?.hasBackButton}
            onClickNextButton={
              actualPage?.page === pagesTitles[pagesTitles.length - 1].page
                ? shouldOpenModal
                : undefined
            }
          />
        </Column>
      </IssuePageContainer>
    </FormProvider>
  );
};

export default Template;
