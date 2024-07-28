import { OutlinedInput } from "@/components";
import { IOpenTicketForm } from "@/types";
import { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type ResumeInputProps = {
  register: UseFormRegister<IOpenTicketForm>;
  error: FieldError | undefined;
};

export const ResumeInput = ({ register, error }: ResumeInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <OutlinedInput
      register={register}
      id="resume"
      type="text"
      placeholder="Do que se trata o chamado?"
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
