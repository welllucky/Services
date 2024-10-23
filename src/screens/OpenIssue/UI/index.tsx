"use client";

import { IOpenIssueForm } from "@/types";
import { LS_KEY_1_TICKET_RECORD, SS_KEY_USER_PREVIOUS_PAGE } from "@/utils";
import { useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import toast from "react-hot-toast";
import { IssuePageContent } from "../styles";
import {
  DateInput,
  DescriptionInput,
  PriorityInput,
  ResumeInput,
  TypeSelect,
} from "./components";

export const OpenIssuePageUI = () => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors, isValid, isValidating },
  } = useFormContext<IOpenIssueForm>();

  const parsedData = useMemo(
    () => JSON.parse(localStorage.getItem(LS_KEY_1_TICKET_RECORD) ?? "{}"),
    [],
  );

  useEffect(() => {
    const isFromOutsideForm =
      (sessionStorage.getItem(SS_KEY_USER_PREVIOUS_PAGE) as string) !== "form";

    if (parsedData.resume) {
      setValue("resume", parsedData.resume, { shouldValidate: true });
      setValue("description", parsedData.description, { shouldValidate: true });
      setValue("date", parsedData.date, { shouldValidate: true });
      setValue("type", parsedData.type, { shouldValidate: true });
      setValue("priority", parsedData.priority, { shouldValidate: true });
      // eslint-disable-next-line no-unused-expressions, @typescript-eslint/no-unused-expressions
      isFromOutsideForm && toast.success("Dados recuperados com sucesso!");
    }
  }, [parsedData, setValue]);

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
        defaultValue={parsedData?.resume}
      />

      <TypeSelect
        error={errors?.type}
        register={register}
        defaultValue={parsedData?.type}
      />

      <DescriptionInput
        error={errors.description}
        register={register}
        defaultValue={parsedData?.description}
      />

      <DateInput
        error={errors?.date}
        register={register}
        defaultValue={parsedData?.date}
      />

      <PriorityInput
        error={errors?.priority}
        register={register}
        defaultValue={parsedData?.priority}
      />
    </IssuePageContent>
  );
};
