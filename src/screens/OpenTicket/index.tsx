"use client";

import { CustomSelect, CustomTextArea, OutlinedInput } from "@/components";
import { IOpenTicketForm } from "@/types/Interfaces/OpenTicketForm";
import { LS_KEY_1_TICKET_RECORD, SS_KEY_USER_PREVIOUS_PAGE } from "@/utils";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import toast from "react-hot-toast";
import { IssuePageContent } from "./styles";

const CreateTicketPage = () => {
  const {
    register,
    formState: { errors, isValid, isValidating },
    watch,
    getValues,
    setValue,
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

  const resumeWatch = watch("resume", "");
  const dateWatch = watch("date", "");
  const descriptionWatch = watch("description", "");
  const typeWatch = watch("type", "problem");
  const priorityWatch = watch("priority", "low");

  return (
    <IssuePageContent
      id="first-step-form"
      as="form">
      <OutlinedInput
        id="resume"
        type="text"
        placeholder="Do que se trata o chamado?"
        $status={
          errors?.resume
            ? "invalid"
            : !errors?.resume && resumeWatch.length
              ? "valid"
              : "none"
        }
        labelText="Resumo"
        errorText={errors?.resume?.message as string}
        register={register}
        registerOptions={{
          required: "É necessário adicionar o resume do chamado",
          minLength: {
            value: 5,
            message: "O resume deve ter no mínimo 5 caracteres",
          },
          maxLength: {
            value: 40,
            message: "O resume deve ter no máximo 40 caracteres",
          },
          pattern: {
            value:
              /^[a-zA-Z0-9áéíóúâêîôûãõàèìòùäëïöüçÁÉÍÓÚÂÊÎÔÛÃÕÀÈÌÒÙÄËÏÖÜÇ\s]*$/,
            message: "O resume deve conter apenas letras e números",
          },
        }}
      />
      <CustomSelect
        id="type"
        isRequired
        placeholder="Qual o tipo do chamado?"
        labelText="Tipo"
        height=""
        options={[
          { key: "1", value: "task", text: "Tarefa" },
          { key: "2", value: "incident", text: "Incidente" },
          { key: "3", value: "problem", text: "Problema" },
          { key: "4", value: "change", text: "Mudança" },
        ]}
        register={register}
        registerOptions={{
          required: "É necessário escolher o type do chamado",
          validate: (value) =>
            value !== "" || "É necessário escolher o type do chamado",
        }}
        $status={
          errors?.type
            ? "invalid"
            : !errors?.type && typeWatch.length
              ? "valid"
              : "none"
        }
      />
      <CustomTextArea
        id="description"
        placeholder="Nos conte mais detalhes sobre o ocorrido..."
        labelText="Descrição"
        height="160px"
        $status={
          errors?.description
            ? "invalid"
            : !errors?.description && descriptionWatch.length
              ? "valid"
              : errors.description?.type === "maxLength"
                ? "warning"
                : "none"
        }
        register={register}
        errorText={errors?.description?.message as string}
        warnText={errors.description?.message as string}
        registerOptions={{
          required: "É necessário escrever mais detalhes sobre o seu chamado",
          minLength: {
            value: 20,
            message: "O resume deve ter no mínimo 20 caracteres",
          },
          maxLength: {
            value: 460,
            message: "O resume deve ter no máximo 280 caracteres",
          },
        }}
      />
      <OutlinedInput
        id="date"
        type="date"
        placeholder="dd/mm/aaaa"
        $status={
          errors?.date
            ? "invalid"
            : !errors?.date && dateWatch.length
              ? "valid"
              : "none"
        }
        errorText={errors?.date?.message as string}
        labelText="Data do ocorrido"
        register={register}
        registerOptions={{
          required: "É necessário adicionar a date do ocorrido",
          validate: (value) => {
            const date = new Date(value);
            const today = new Date();
            return date < today || "A date não pode ser no futuro";
          },
        }}
      />
      <CustomSelect
        id="priority"
        isRequired
        placeholder="Quão urgente é o chamado?"
        labelText="Prioridade"
        options={[
          { key: "1", value: "low", text: "pouco urgente" },
          { key: "2", value: "medium", text: "mais ou menos" },
          { key: "3", value: "high", text: "muito urgente" },
        ]}
        register={register}
        registerOptions={{
          required: "É necessário escolher a priority do chamado",
          validate: (value) =>
            value !== "" || "É necessário escolher a priority do chamado",
        }}
        $status={
          errors?.priority
            ? "invalid"
            : !errors?.priority && priorityWatch.length
              ? "valid"
              : "none"
        }
      />
    </IssuePageContent>
  );
};

export { CreateTicketPage };
