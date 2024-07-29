/* eslint-disable no-nested-ternary */
import { CustomTextArea } from "@/components";
import { IOpenTicketForm } from "@/types";
import { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type DescriptionInputProps = {
  register: UseFormRegister<IOpenTicketForm>;
  error: FieldError | undefined;
  defaultValue?: string;
};

export const DescriptionInput = ({
  register,
  error,
  defaultValue,
}: DescriptionInputProps) => {
  const [inputValue, setInputValue] = useState<string>(defaultValue ?? "");

  return (
    <CustomTextArea
      id="description"
      placeholder="Nos conte mais detalhes sobre o ocorrido..."
      labelText="Descrição"
      height="160px"
      $status={
        inputValue.length === 0
          ? "none"
          : error?.type === "maxLength"
            ? "warning"
            : error
              ? "invalid"
              : "valid"
      }
      register={register}
      errorText={error?.message as string}
      warnText={error?.message as string}
      registerOptions={{
        required: "É necessário escrever mais detalhes sobre o seu chamado",
        minLength: {
          value: 50,
          message: "A descrição deve ter no mínimo 50 caracteres",
        },
        maxLength: {
          value: 460,
          message: "A descrição deve ter no máximo 460 caracteres",
        },
        onChange(event) {
          setInputValue(event?.target?.value);
        },
      }}
    />
  );
};
