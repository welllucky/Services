import { OutlinedInput } from "@/components";
import { IOpenIssueForm } from "@/types";
import { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type ResumeInputProps = {
  register: UseFormRegister<IOpenIssueForm>;
  error: FieldError | undefined;
  defaultValue?: string;
};

export const ResumeInput = ({
  register,
  error,
  defaultValue,
}: ResumeInputProps) => {
  const [inputValue, setInputValue] = useState<string>(defaultValue ?? "");

  return (
    <OutlinedInput
      register={register}
      id="resume"
      type="text"
      placeholder="Do que se trata o chamado?"
      // eslint-disable-next-line no-nested-ternary
      $status={inputValue.length === 0 ? "none" : error ? "invalid" : "valid"}
      labelText="Resumo"
      errorText={error?.message as string}
      registerOptions={{
        required: "É necessário adicionar o resumo do chamado",
        minLength: {
          value: 20,
          message: "O resumo deve ter no mínimo 20 caracteres",
        },
        maxLength: {
          value: 80,
          message: "O resumo deve ter no máximo 80 caracteres",
        },
        onChange(event) {
          setInputValue(event?.target?.value);
        },
      }}
    />
  );
};
