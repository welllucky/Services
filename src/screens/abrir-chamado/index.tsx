"use client";

import { IOpenTicketForm } from "@/app/(protected)/(form)/template";
import { CustomSelect, CustomTextArea, OutlinedInput } from "@/components";
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
    const data = localStorage.getItem(LS_KEY_1_TICKET_RECORD);
    const isFromOutsideForm =
      (sessionStorage.getItem(SS_KEY_USER_PREVIOUS_PAGE) as string) !== "form";

    if (data) {
      const parsedData: IOpenTicketForm = JSON.parse(data);
      setValue("resumo", parsedData.resumo, { shouldValidate: true });
      setValue("descricao", parsedData.descricao, { shouldValidate: true });
      setValue("data", parsedData.data, { shouldValidate: true });
      setValue("tipo", parsedData.tipo, { shouldValidate: true });
      setValue("prioridade", parsedData.prioridade, { shouldValidate: true });
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

  const resumeWatch = watch("resumo", "");
  const dataWatch = watch("data", "");
  const descriptionWatch = watch("descricao", "");
  const typeWatch = watch("tipo", "");
  const priorityWatch = watch("prioridade", "baixa");

  return (
    <IssuePageContent
      id="first-step-form"
      as="form">
      <OutlinedInput
        id="resumo"
        type="text"
        placeholder="Do que se trata o chamado?"
        $status={
          errors?.resumo
            ? "invalid"
            : !errors?.resumo && resumeWatch.length
              ? "valid"
              : "none"
        }
        labelText="Resumo"
        errorText={errors?.resumo?.message as string}
        register={register}
        registerOptions={{
          required: "É necessário adicionar o resumo do chamado",
          minLength: {
            value: 5,
            message: "O resumo deve ter no mínimo 5 caracteres",
          },
          maxLength: {
            value: 40,
            message: "O resumo deve ter no máximo 40 caracteres",
          },
          pattern: {
            value:
              /^[a-zA-Z0-9áéíóúâêîôûãõàèìòùäëïöüçÁÉÍÓÚÂÊÎÔÛÃÕÀÈÌÒÙÄËÏÖÜÇ\s]*$/,
            message: "O resumo deve conter apenas letras e números",
          },
        }}
      />
      <CustomSelect
        id="tipo"
        isRequired
        placeholder="Qual o tipo do chamado?"
        labelText="Tipo"
        height=""
        options={[
          { key: "1", value: "1", text: "1" },
          { key: "2", value: "2", text: "2" },
          { key: "3", value: "3", text: "3" },
        ]}
        register={register}
        registerOptions={{
          required: "É necessário escolher o tipo do chamado",
          validate: (value) =>
            value !== "" || "É necessário escolher o tipo do chamado",
        }}
        $status={
          errors?.tipo
            ? "invalid"
            : !errors?.tipo && typeWatch.length
              ? "valid"
              : "none"
        }
      />
      <CustomTextArea
        id="descricao"
        placeholder="Nos conte mais detalhes sobre o ocorrido..."
        labelText="Descrição"
        height="160px"
        $status={
          errors?.descricao
            ? "invalid"
            : !errors?.descricao && descriptionWatch.length
              ? "valid"
              : errors.descricao?.type === "maxLength"
                ? "warning"
                : "none"
        }
        register={register}
        errorText={errors?.descricao?.message as string}
        warnText={errors.descricao?.message as string}
        registerOptions={{
          required: "É necessário escrever mais detalhes sobre o seu chamado",
          minLength: {
            value: 20,
            message: "O resumo deve ter no mínimo 20 caracteres",
          },
          maxLength: {
            value: 460,
            message: "O resumo deve ter no máximo 280 caracteres",
          },
        }}
      />
      <OutlinedInput
        id="data"
        type="date"
        placeholder="dd/mm/aaaa"
        $status={
          errors?.data
            ? "invalid"
            : !errors?.data && dataWatch.length
              ? "valid"
              : "none"
        }
        errorText={errors?.data?.message as string}
        labelText="Data do ocorrido"
        register={register}
        registerOptions={{
          required: "É necessário adicionar a data do ocorrido",
          validate: (value) => {
            const date = new Date(value);
            const today = new Date();
            return date < today || "A data não pode ser no futuro";
          },
        }}
      />
      <CustomSelect
        id="prioridade"
        isRequired
        placeholder="Quão urgente é o chamado?"
        labelText="Prioridade"
        options={[
          { key: "baixa", value: "baixa", text: "pouco urgente" },
          { key: "media", value: "media", text: "mais ou menos" },
          { key: "alta", value: "alta", text: "muito urgente" },
        ]}
        register={register}
        registerOptions={{
          required: "É necessário escolher a prioridade do chamado",
          validate: (value) =>
            value !== "" || "É necessário escolher a prioridade do chamado",
        }}
        $status={
          errors?.prioridade
            ? "invalid"
            : !errors?.prioridade && priorityWatch.length
              ? "valid"
              : "none"
        }
      />
    </IssuePageContent>
  );
};

export { CreateTicketPage };
