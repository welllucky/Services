import { CustomFieldset, ErrorText, WarningText } from "@/components";
import { InputComponentsProps } from "@/types";
import { ChangeEventHandler } from "react";
import { useController } from "react-hook-form";
import { CustomOption, SelectComponent, SelectContainer } from "./styles";

interface OptionProps {
  key: string;
  value: string;
  text: string;
  isDisabled?: boolean;
  isSelected?: boolean;
}

export interface SelectProps extends InputComponentsProps {
  /**
   * Function triggered on select value change
   */
  onChange?: ChangeEventHandler<HTMLSelectElement>;

  /**
   * Function triggered when select loses focus
   */
  onBlur?: ChangeEventHandler<HTMLSelectElement>;

  /**
   * Array of options for the select
   */
  options?: OptionProps[];

  /**
   * Allows multiple selection
   */
  multiple?: boolean;

  /**
   * Form identifier
   */
  form?: string;

  /**
   * ID of the select component
   */
  id: string;

  /**
   * The selected value
   */
  value?: string;

  /**
   * Disables the select
   */
  isDisabled?: boolean;
}

/**
 * CustomSelect component
 *
 * @description A custom select component supporting single or multiple selections, validation, and placeholder.
 *
 * @param {SelectProps} props - Properties for the select component
 */
export const CustomSelect = ({
  options,
  labelText,
  errorText,
  warnText,
  id,
  registerOptions,
  placeholder = "Select an option",
  width = "100%",
  height = "56px",
  $status = "none",
  isRequired = false,
  multiple = false,
  isDisabled = false,
  control,
  value,
}: SelectProps) => {
  const { field } = useController({
    name: id,
    control,
    rules: { ...registerOptions, required: isRequired },
    defaultValue: value,
    disabled: isDisabled,
  });

  const colorMapping = {
    invalid: "#b3261e",
    valid: "#7ac143",
    warning: "#f2994a",
    none: "#79747e",
  };

  return (
    <SelectContainer $status={$status}>
      <CustomFieldset
        width={width}
        $minHeight={height}
        labelText={labelText ?? ""}
        color={colorMapping[$status]}>
        <SelectComponent
          $isPlaceholder={field.value === ""}
          {...field}
          multiple={multiple}>
          <CustomOption
            disabled={!field.value}
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
      </CustomFieldset>
      {$status === "invalid" && <ErrorText>{errorText}</ErrorText>}
      {$status === "warning" && <WarningText>{warnText}</WarningText>}
    </SelectContainer>
  );
};
