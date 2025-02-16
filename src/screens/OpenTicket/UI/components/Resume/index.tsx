import { OutlinedInput } from "@/components";
import { Control, FieldError } from "react-hook-form";

type ResumeInputProps = {
  control: Control;
  error: FieldError | undefined;
  defaultValue?: string;
};

export const ResumeInput = ({
  control,
  error,
  defaultValue,
}: ResumeInputProps) => {
  return (
    <OutlinedInput
      control={control}
      id="resume"
      type="text"
      margin="10px 0px 0px 0px"
      value={defaultValue}
      placeholder="Do que se trata o chamado?"
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
      }}
    />
  );
};
