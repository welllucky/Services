import { TextArea, TextAreaContainer } from "./styles";
import { CustomFieldset } from "../../../Fieldset";
import { InputComponentsProps } from "@/types";
import { ErrorText, WarningText } from "@/components";

interface TextAreaProps extends InputComponentsProps {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const CustomTextArea = ({
  id,
  labelText,
  placeholder,
  width = "100%",
  height = "240px",
  value,
  onChange,
  isRequired = false,
  register,
  registerOptions,
  $status = "none",
  errorText,
  warnText,
  style
}: TextAreaProps) => {
  return (
    <TextAreaContainer $status={$status}>
      <CustomFieldset width={width as string} labelText={labelText as string}>
        <TextArea
          {...register(id, {
            ...registerOptions,
            required: isRequired
              ? "Este campo é obrigatório"
              : registerOptions?.required
                ? registerOptions?.required
                : false,
            onChange: (e) => {
              if (onChange) onChange(e);
              if (registerOptions?.onChange) registerOptions.onChange(e);
            }
          })}
          height={height as string}
          width={width as string}
          placeholder={placeholder}
          value={value}
        />
      </CustomFieldset>
      {$status === "invalid" && <ErrorText>{errorText}</ErrorText>}
      {$status === "warning" && <WarningText>{warnText}</WarningText>}
    </TextAreaContainer>
  );
};
