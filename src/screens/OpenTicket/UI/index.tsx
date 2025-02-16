"use client";

import { useEffect } from "react";
import { Control } from "react-hook-form";
import { useOpenTicket } from "../OpenTicket.hook";
import { TicketPageContent } from "../OpenTicket.styles";
import {
  DateInput,
  DescriptionInput,
  PriorityInput,
  ResumeInput,
  TypeSelect,
} from "./components";

export const OpenTicketPageUI = () => {
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
        error={errors?.resume}
        defaultValue={formData?.resume}
      />

      <TypeSelect
        error={errors?.type}
        control={control as unknown as Control}
        defaultValue={formData?.type}
      />

      <DescriptionInput
        error={errors.description}
        control={control as unknown as Control}
        defaultValue={formData?.description}
      />

      <DateInput
        error={errors?.date}
        control={control as unknown as Control}
        defaultValue={formData?.date}
      />

      <PriorityInput
        error={errors?.priority}
        control={control as unknown as Control}
        defaultValue={formData?.priority}
      />
    </TicketPageContent>
  );
};
