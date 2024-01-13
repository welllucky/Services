"use client";

import { CustomSelect, CustomTextArea, OutlinedInput } from "@/components";
import { IssuePageContent } from "./styles";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import toast from "react-hot-toast";
import {
  LS_KEY_1_TICKET_RECORD,
  SS_KEY_DATA_WAS_RECOVERY
} from "@/utils/alias";
import { IOpenTicketForm } from "@/app/(app)/(form)/template";

const CreateTicketPage = () => {
  const {
    register,
    formState: { errors, isValid, isValidating },
    watch,
    getValues,
    setValue
  } = useFormContext<IOpenTicketForm>();

  useEffect(() => {
    const data = localStorage.getItem(LS_KEY_1_TICKET_RECORD);
    const isDataRecovered =
      sessionStorage.getItem(SS_KEY_DATA_WAS_RECOVERY) === "true";
    if (data) {
      const parsedData: IOpenTicketForm = JSON.parse(data);
      setValue("resumo", parsedData.resumo, { shouldValidate: true });
      setValue("descricao", parsedData.descricao, { shouldValidate: true });
      setValue("data", parsedData.data, { shouldValidate: true });
      setValue("tipo", parsedData.tipo, { shouldValidate: true });
      !isDataRecovered && toast.success("Dados recuperados com sucesso!");
      sessionStorage.setItem(SS_KEY_DATA_WAS_RECOVERY, "true");
    }
  }, []);

  useEffect(() => {
    if (isValid && !isValidating) {
      localStorage.setItem(
        LS_KEY_1_TICKET_RECORD,
        JSON.stringify({ ...getValues() })
      );
    }
  }, [isValid, isValidating]);

  const resumeWatch = watch("resumo", "");
  const dataWatch = watch("data", "");
  const descriptionWatch = watch("descricao", "");
  const typeWatch = watch("tipo", "");

  return (
    <IssuePageContent id="first-step-form" as="form">
      <OutlinedInput
        id="resumo"
        type="text"
        placeholder="Do que se trata o chamado?"
        $status={
          !!errors?.resumo
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
            message: "O resumo deve ter no mínimo 5 caracteres"
          },
          maxLength: {
            value: 40,
            message: "O resumo deve ter no máximo 40 caracteres"
          },
          pattern: {
            value:
              /^[a-zA-Z0-9áéíóúâêîôûãõàèìòùäëïöüçÁÉÍÓÚÂÊÎÔÛÃÕÀÈÌÒÙÄËÏÖÜÇ\s]*$/,
            message: "O resumo deve conter apenas letras e números"
          }
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
          { key: "3", value: "3", text: "3" }
        ]}
        register={register}
        registerOptions={{
          required: "É necessário escolher o tipo do chamado",
          validate: (value) =>
            value !== "" || "É necessário escolher o tipo do chamado"
        }}
        $status={
          !!errors?.tipo
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
        $status={
          !!errors?.descricao
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
            message: "O resumo deve ter no mínimo 20 caracteres"
          },
          maxLength: {
            value: 280,
            message: "O resumo deve ter no máximo 280 caracteres"
          }
        }}
      />
      <OutlinedInput
        id="data"
        type="date"
        placeholder="dd/mm/aaaa"
        $status={
          !!errors?.data
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
          }
        }}
      />
    </IssuePageContent>
  );
};

export { CreateTicketPage };
