/* eslint-disable no-nested-ternary */
import { CustomTextArea } from "@/components";
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
  return (
    <CustomTextArea
      id="description"
      placeholder="Nos conte mais detalhes sobre o ocorrido..."
      labelText="Descrição"
      height="160px"
      control={control}
      value={defaultValue}
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
      }}
    />
  );
};
