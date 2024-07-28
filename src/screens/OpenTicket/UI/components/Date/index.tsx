/* eslint-disable no-nested-ternary */
import { OutlinedInput } from "@/components";
import { IOpenTicketForm } from "@/types";
import { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type DateInputProps = {
  register: UseFormRegister<IOpenTicketForm>;
  error: FieldError | undefined;
};

export const DateInput = ({ register, error }: DateInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <OutlinedInput
      id="date"
      register={register}
      type="date"
      placeholder="dd/mm/aaaa"
      $status={inputValue.length === 0 ? "none" : error ? "invalid" : "valid"}
      errorText={error?.message as string}
      labelText="Data do ocorrido"
      registerOptions={{
        required: "É necessário adicionar a date do ocorrido",
        validate: (value) => {
          const date = new Date(value);
          const today = new Date();
          return date < today || "A date não pode ser no futuro";
        },
        onChange(event) {
          setInputValue(event?.target?.value);
        },
        valueAsDate: true,
      }}
    />
  );
};
