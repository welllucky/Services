import { ErrorText, WarningText } from "@/components";
import { InputComponentsProps } from "@/types";
import { ChangeEvent } from "react";
import { CustomFieldset } from "../../../Fieldset";
import { TextArea, TextAreaContainer } from "./styles";

interface TextAreaProps extends InputComponentsProps {
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
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
}: TextAreaProps) => {
  return (
    <TextAreaContainer $status={$status}>
      <CustomFieldset
        width={width}
        height={height}
        $hasOverflow
        labelText={labelText || ""}>
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
            },
          })}
          height={height || "100%"}
          width="100%"
          placeholder={placeholder}
          value={value}
        />
      </CustomFieldset>
      {$status === "invalid" && <ErrorText>{errorText}</ErrorText>}
      {$status === "warning" && <WarningText>{warnText}</WarningText>}
    </TextAreaContainer>
  );
};
