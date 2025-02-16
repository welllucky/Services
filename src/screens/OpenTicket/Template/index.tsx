"use client";

import { BackButton, FormButtons } from "@/components";
import { LS_KEY_1_TICKET_RECORD } from "@/constraints";
import { IssuePageContainer } from "@/screens/Issue/styles";
import { Column, Row, TitleComponent } from "@/styles";
import { IHttpError, IHttpResponse, IOpenTicketForm, TicketDto } from "@/types";
import { buildTestIds, issueApi, resetForm } from "@/utils";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { recoverFormDataFromLocalStorage } from "../OpenTicket.utils";
import { ICreateIssueFlowPage, useCreateIssueFlow } from "./data";

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

  const sendTicketRegister = async () => {
    try {
      const formData = recoverFormDataFromLocalStorage();
      toast.loading("Registrando chamado...");
      const response = await fetch(issueApi.createIssueUrl(), {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao registrar chamado. Tente novamente.");
      }

      const { data } = (await response.json()) as IHttpResponse<
        TicketDto,
        IHttpError
      >;

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

  const methods = useForm<IOpenTicketForm>({
    mode: "onChange",
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

  const { actualPage, nextPage, previousPage } = useCreateIssueFlow(
    pathName,
    pages,
  );

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
