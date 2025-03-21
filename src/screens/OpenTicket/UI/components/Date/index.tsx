/* eslint-disable no-nested-ternary */
import { OutlinedInput } from "@/components";
import { useState } from "react";
import { Control, FieldError } from "react-hook-form";

type DateInputProps = {
  control: Control;
  error: FieldError | undefined;
  defaultValue?: string;
};

export const DateInput = ({ control, error, defaultValue }: DateInputProps) => {
  const [inputValue, setInputValue] = useState<string>(defaultValue ?? "");

  return (
    <OutlinedInput
      id="date"
      control={control}
      type="date"
      value={inputValue}
      placeholder="dd/mm/aaaa"
      errorText={error?.message as string}
      labelText="Data do ocorrido"
      registerOptions={{
        required: "É necessário adicionar a data do ocorrido",
        validate: (value) => {
          const date = new Date(value);
          const today = new Date();
          return date < today || "A data não pode ser no futuro";
        },
        onChange(event) {
          setInputValue(event?.target?.value);
        },
        valueAsDate: true,
      }}
    />
  );
};
