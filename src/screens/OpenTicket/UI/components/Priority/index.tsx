/* eslint-disable no-nested-ternary */
import { CustomSelect } from "@/components";
import { IOpenTicketForm } from "@/types";
import { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type PriorityInputProps = {
  register: UseFormRegister<IOpenTicketForm>;
  error: FieldError | undefined;
  defaultValue?: string;
};

export const PriorityInput = ({ register, error, defaultValue }: PriorityInputProps) => {
  const [selectValue, setSelectValue] = useState<string>(defaultValue ?? "");

  return (
    <CustomSelect
      id="priority"
      isRequired
      placeholder="Quão urgente é o chamado?"
      labelText="Prioridade"
      value={selectValue}
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
        onChange(event) {
          setSelectValue(event?.target?.value);
        },
      }}
      $status={selectValue.length === 0 ? "none" : error ? "invalid" : "valid"}
    />
  );
};
