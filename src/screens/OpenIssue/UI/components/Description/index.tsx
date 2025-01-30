/* eslint-disable no-nested-ternary */
import { CustomTextArea } from "@/components";
import { useState } from "react";
import { Control, FieldError } from "react-hook-form";

type DescriptionInputProps = {
  control: Control;
  error: FieldError | undefined;
  defaultValue?: string;
};

export const DescriptionInput = ({
  control,
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
      control={control}
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
