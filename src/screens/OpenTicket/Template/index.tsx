"use client";

import { BackButton, FormButtons } from "@/components";
import { IssuePageContainer } from "@/screens/Ticket/styles";
import { Column, Row, TitleComponent } from "@/styles";
import { IOpenTicketForm } from "@/types";
import { buildTestIds, resetForm } from "@/utils";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ICreateIssueFlowPage, useCreateTicketFlow } from "./data";

type OpenIssueTemplateUIProps = {
  pages: ICreateIssueFlowPage[];
  children: ReactNode;
};

export const OpenIssueTemplateUI = ({
  children,
  pages,
}: OpenIssueTemplateUIProps) => {
  const pathName = usePathname();
  const { push, back } = useRouter();

  const methods = useForm<IOpenTicketForm>({
    mode: "onBlur",
    defaultValues: {
      resume: "",
      description: "",
      date: "",
      type: undefined,
      priority: undefined,
    },
    reValidateMode: "onChange",
    shouldFocusError: true,
    progressive: true,
  });

  const { actualPage, nextPage, previousPage, sendTicketRegister } =
    useCreateTicketFlow(pathName, pages);

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
              if (actualPage?.page === pages[0].page) {
                resetForm();
                push("/");
              } else {
                back();
              }
            }}
            actionText={
              actualPage?.page === pages[0].page ? "voltar" : previousPage.title
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
            nextPage={nextPage?.page}
            hasBackButton={actualPage?.hasBackButton}
            onClickNextButton={
              actualPage?.page === pages[pages.length - 1].page
                ? sendTicketRegister
                : undefined
            }
          />
        </Column>
      </IssuePageContainer>
    </FormProvider>
  );
};
