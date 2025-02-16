import { CustomFieldset, ErrorText, WarningText } from "@/components";
import { InputComponentsProps, OptionProps } from "@/types";
import { ChangeEventHandler } from "react";
import { useController } from "react-hook-form";
import { useCustomInput } from "../input.hook";
import { CustomOption, SelectComponent, SelectContainer } from "./styles";

export interface SelectProps
  extends Omit<InputComponentsProps, "onChange" | "onBlur"> {
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
  value = "",
}: SelectProps) => {
  const { field, fieldState } = useController({
    name: id,
    control,
    rules: { ...registerOptions, required: isRequired },
    defaultValue: value,
    disabled: isDisabled,
  });

  const { errorMessageText, internalStatus } = useCustomInput({
    errorText,
    fieldState,
    status: $status,
    value: field.value,
    isDisabled,
  });

  const colorMapping = {
    invalid: "#b3261e",
    valid: "#7ac143",
    warning: "#f2994a",
    none: "#79747e",
    disabled: "#acacac",
  };

  return (
    <SelectContainer
      width={width}
      height={height}
      $status={internalStatus}>
      <CustomFieldset
        labelText={labelText ?? ""}
        color={colorMapping[`${internalStatus}`]}>
        <SelectComponent
          width={width}
          height={height}
          $isPlaceholder={field.value === ""}
          {...field}
          multiple={multiple}>
          <CustomOption value="">{placeholder}</CustomOption>
          {options?.map((option) => (
            <CustomOption
              key={option?.key}
              value={option.value}
              selected={Boolean(option?.isSelected)}
              disabled={Boolean(option?.isDisabled)}>
              {option?.text}
            </CustomOption>
          ))}
        </SelectComponent>
      </CustomFieldset>
      {internalStatus === "invalid" && errorMessageText && (
        <ErrorText>{errorMessageText}</ErrorText>
      )}
      {internalStatus === "warning" && warnText && (
        <WarningText>{warnText}</WarningText>
      )}
    </SelectContainer>
  );
};
