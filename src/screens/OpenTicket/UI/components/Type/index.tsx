/* eslint-disable no-nested-ternary */
import { CustomSelect } from "@/components";
import { IOpenTicketForm } from "@/types";
import { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type TypeSelectProps = {
  register: UseFormRegister<IOpenTicketForm>;
  error: FieldError | undefined;
};

export const TypeSelect = ({ register, error }: TypeSelectProps) => {
  const [selectValue, setSelectValue] = useState<string>("");

  return (
    <CustomSelect
      id="type"
      register={register}
      isRequired
      placeholder="Qual o tipo do chamado?"
      labelText="Tipo"
      errorText={error?.message}
      registerOptions={{
        required: "É necessário adicionar o tipo do chamado",
        onChange(event) {
          setSelectValue(event?.target?.value);
        },
      }}
      options={[
        { key: "1", value: "task", text: "Tarefa" },
        { key: "2", value: "incident", text: "Incidente" },
        { key: "3", value: "problem", text: "Problema" },
        { key: "4", value: "change", text: "Mudança" },
      ]}
      $status={selectValue.length === 0 ? "none" : error ? "invalid" : "valid"}
    />
  );
};
