/* eslint-disable no-nested-ternary */
import { CustomSelect } from "@/components";
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
  return (
    <CustomSelect
      id="type"
      control={control}
      isRequired
      placeholder="Qual o tipo do chamado?"
      labelText="Tipo"
      errorText={error?.message}
      value={defaultValue}
      registerOptions={{
        required: "É necessário adicionar o tipo do chamado",
      }}
      options={[
        { key: "1", value: "task", text: "Tarefa" },
        { key: "2", value: "incident", text: "Incidente" },
        { key: "3", value: "problem", text: "Problema" },
        { key: "4", value: "change", text: "Mudança" },
      ]}
    />
  );
};
