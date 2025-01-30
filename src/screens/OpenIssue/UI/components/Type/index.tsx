/* eslint-disable no-nested-ternary */
import { CustomSelect } from "@/components";
import { useState } from "react";
import { Control, FieldError } from "react-hook-form";

type TypeSelectProps = {
  control: Control;
  error: FieldError | undefined;
  defaultValue?: string;
};

export const TypeSelect = ({
  control,
  error,
  defaultValue,
}: TypeSelectProps) => {
  const [selectValue, setSelectValue] = useState<string>(defaultValue ?? "");

  return (
    <CustomSelect
      id="type"
      control={control}
      isRequired
      placeholder="Qual o tipo do chamado?"
      labelText="Tipo"
      errorText={error?.message}
      value={selectValue}
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
