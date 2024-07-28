"use client";

import { IOpenTicketForm } from "@/types";
import { useFormContext } from "react-hook-form";
import toast from "react-hot-toast";
import { LS_KEY_1_TICKET_RECORD, SS_KEY_USER_PREVIOUS_PAGE } from "@/utils";
import { useEffect } from "react";
import { IssuePageContent } from "../styles";
import {
  DateInput,
  DescriptionInput,
  PriorityInput,
  ResumeInput,
  TypeSelect,
} from "./components";

export const OpenTicketPageUI = () => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors, isValid, isValidating },
  } = useFormContext<IOpenTicketForm>();

  useEffect(() => {
    const date = localStorage.getItem(LS_KEY_1_TICKET_RECORD);
    const isFromOutsideForm =
      (sessionStorage.getItem(SS_KEY_USER_PREVIOUS_PAGE) as string) !== "form";

    if (date) {
      const parsedData: IOpenTicketForm = JSON.parse(date);
      setValue("resume", parsedData.resume, { shouldValidate: true });
      setValue("description", parsedData.description, { shouldValidate: true });
      setValue("date", parsedData.date, { shouldValidate: true });
      setValue("type", parsedData.type, { shouldValidate: true });
      setValue("priority", parsedData.priority, { shouldValidate: true });
      // eslint-disable-next-line no-unused-expressions
      isFromOutsideForm && toast.success("Dados recuperados com sucesso!");
    }
  }, [setValue]);

  useEffect(() => {
    if (isValid && !isValidating) {
      localStorage.setItem(
        LS_KEY_1_TICKET_RECORD,
        JSON.stringify({ ...getValues() }),
      );
    }
  }, [getValues, isValid, isValidating]);

  return (
    <IssuePageContent
      id="first-step-form"
      as="form">
      <ResumeInput
        register={register}
        error={errors?.resume}
      />
      <TypeSelect
        error={errors?.type}
        register={register}
      />

      <DescriptionInput
        error={errors.description}
        register={register}
      />
      <DateInput
        error={errors?.date}
        register={register}
      />
      <PriorityInput
        error={errors?.priority}
        register={register}
      />
    </IssuePageContent>
  );
};
