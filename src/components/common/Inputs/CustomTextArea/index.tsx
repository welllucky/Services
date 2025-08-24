"use client";

/* eslint-disable no-nested-ternary */
import { ChangeEvent } from "react";
import { useController } from "react-hook-form";

import { ErrorText, WarningText } from "@/components/SupportText";
import { InputComponentsProps } from "@/types";

import { CustomFieldset } from "../../../Fieldset";
import { useCustomInput } from "../input.hook";
import { TextArea, TextAreaContainer } from "./styles";

export interface TextAreaProps extends Omit<InputComponentsProps, "onChange"> {
  /**
   * Function triggered on text area value change
   */
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * CustomTextArea component
 *
 * @description A customizable text area with validation and dynamic styles.
 *
 * @param {TextAreaProps} props - Properties for the text area component.
 * @param {string} props.id - The unique identifier for the text area.
 * @param {string} props.labelText - The label displayed above the text area.
 * @param {string} [props.placeholder] - Placeholder text displayed inside the text area.
 * @param {string} [props.width="100%"] - Width of the text area container.
 * @param {string} [props.height="160px"] - Height of the text area.
 * @param {string} [props.value] - The current value of the text area.
 * @param {boolean} [props.isRequired=false] - Whether the text area is required.
 * @param {string} [props.$status="none"] - Validation status of the text area ("none", "invalid", "warning").
 * @param {string} [props.errorText] - Error message displayed when status is invalid.
 * @param {string} [props.warnText] - Warning message displayed when status is warning.
 *
 * @example
 * <CustomTextArea
 *   id="description"
 *   labelText="Description"
 *   placeholder="Type your description here"
 *   value={description}
 *   onChange={(e) => setDescription(e.target.value)}
 *   isRequired={true}
 *   $status="none"
 * />
 */
export const CustomTextArea = ({
  id,
  labelText = "",
  placeholder,
  width = "100%",
  height = "160px",
  value,
  isRequired = false,
  registerOptions,
  $status = "none",
  errorText,
  warnText,
  control,
  isDisabled,
}: TextAreaProps) => {
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
  });

  const colorMapping = {
    invalid: "#b3261e",
    valid: "#7ac143",
    warning: "#f2994a",
    none: "#79747e",
    disabled: "#acacac",
  };

  return (
    <TextAreaContainer $status={internalStatus}>
      <CustomFieldset
        labelText={labelText}
        color={colorMapping[`${internalStatus}`]}>
        <TextArea
          {...field}
          width={width}
          height={height}
          placeholder={placeholder}
        />
      </CustomFieldset>
      {internalStatus === "invalid" && (
        <ErrorText>{errorMessageText}</ErrorText>
      )}
      {internalStatus === "warning" && <WarningText>{warnText}</WarningText>}
    </TextAreaContainer>
  );
};
