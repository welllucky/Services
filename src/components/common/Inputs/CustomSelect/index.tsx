import { CustomFieldset, ErrorText, WarningText } from "@/components";
import { InputComponentsProps } from "@/types";
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
  onBlur?: ChangeEventHandler<HTMLSelectElement>;
  options?: OptionProps[];
  multiple?: boolean;
  form?: string;
  id: string;
  value?: string;
  isDisabled?: boolean;
}
export const CustomSelect = ({
  options,
  labelText,
  errorText,
  warnText,
  id,
  registerOptions,
  placeholder = "selecione uma opção",
  width = "100%",
  height = "56px",
  $status = "none",
  isRequired = false,
  multiple = false,
  isDisabled = false,
  register,
  value,
}: SelectProps) => {
  const [selectValue, setSelectValue] = useState<string>(value ?? "");
  return (
    <SelectContainer $status={$status}>
      <CustomFieldset
        width={width}
        $minHeight={height}
        labelText={labelText ?? ""}>
        <SelectComponent
          $isPlaceholder={selectValue === ""}
          {...register(id, {
            ...registerOptions,
            required: isRequired,
            disabled: isDisabled,
            onChange: (e) => {
              if (registerOptions?.onChange) registerOptions.onChange(e);
              setSelectValue(e.target.value);
            },
          })}
          multiple={multiple}>
          <CustomOption
            disabled={isRequired}
            value="">
            {placeholder}
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
