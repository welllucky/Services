"use client";

import { useEffect } from "react";
import { Control, FieldError } from "react-hook-form";

import { useOpenTicket } from "../OpenTicket.hook";
import { TicketPageContent } from "../OpenTicket.styles";
import {
  DateInput,
  DescriptionInput,
  PriorityInput,
  ResumeInput,
  TypeSelect,
} from "./components";

const OpenTicketPageUI = () => {
  const { control, errors, recoverFormData, formData } = useOpenTicket();

  useEffect(() => {
    recoverFormData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TicketPageContent
      id="first-step-form"
      as="form">
      <ResumeInput
        control={control as unknown as Control}
        error={errors?.resume as FieldError}
        defaultValue={formData?.resume}
      />

      <TypeSelect
        error={errors?.type as FieldError}
        control={control as unknown as Control}
        defaultValue={formData?.type}
      />

      <DescriptionInput
        error={errors.description as FieldError}
        control={control as unknown as Control}
        defaultValue={formData?.description}
      />

      <DateInput
        error={errors?.date as FieldError}
        control={control as unknown as Control}
        defaultValue={formData?.date}
      />

      <PriorityInput
        error={errors?.priority as FieldError}
        control={control as unknown as Control}
        defaultValue={formData?.priority}
      />
    </TicketPageContent>
  );
};

export default OpenTicketPageUI;
