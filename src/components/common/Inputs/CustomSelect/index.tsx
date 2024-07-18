import { InputComponentsProps } from "@/assets";
import { ErrorText, WarningText } from "@/components";
import { CustomFieldset } from "@/components/Fieldset";
import { ChangeEventHandler, useState } from "react";
import { CustomOption, SelectComponent, SelectContainer } from "./styles";

interface OptionProps {
  key: string;
  value: string;
  text: string;
  isDisabled?: boolean;
  isSelected?: boolean;
}
interface SelectProps extends InputComponentsProps {
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  options?: OptionProps[];
  multiple?: boolean;
  form?: string;
  name?: string;
  value?: string;
}
export const CustomSelect = ({
  id,
  labelText,
  placeholder = "selecione uma opção",
  width = "100%",
  height = "56px",
  options,
  onChange,
  isRequired = false,
  multiple = false,
  register,
  registerOptions,
  $status = "none",
  errorText,
  warnText,
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  return (
    <SelectContainer $status={$status}>
      <CustomFieldset
        width={width}
        height={height}
        labelText={labelText || ""}>
        <SelectComponent
          isPlaceholder={selectedValue === ""}
          {...register(id, {
            ...registerOptions,
            required: isRequired
              ? "É necessário escolher uma opção"
              : registerOptions?.required
                ? registerOptions?.required
                : false,
            onChange: (e) => {
              setSelectedValue(e.target.value);
              if (onChange) onChange(e);
              if (registerOptions?.onChange) registerOptions.onChange(e);
            },
          })}
          multiple={multiple}>
          <CustomOption
            // disabled={isRequired}
            value="">
            {placeholder ?? "selecione uma opção abaixo"}
          </CustomOption>
          {options?.map((option) => (
            <CustomOption
              key={option?.key}
              value={option.value}
              selected={!!option?.isSelected}
              disabled={!!option?.isDisabled}>
              {option?.text}
            </CustomOption>
          ))}
        </SelectComponent>
        {$status === "invalid" && <ErrorText>{errorText}</ErrorText>}
        {$status === "warning" && <WarningText>{warnText}</WarningText>}
      </CustomFieldset>
    </SelectContainer>
  );
};
