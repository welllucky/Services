"use client";

import { StaticImageData } from "next/image";
import { ChangeEvent, ReactNode } from "react";
import { Control, useController } from "react-hook-form";

import { ErrorText, WarningText } from "@/components/SupportText";
import { InputComponentsProps } from "@/types";

import { useCustomInput } from "../input.hook";
import {
  ContentContainer,
  InputComponent,
  InputContainer,
  Label,
} from "./styles";

export interface ActionButton {
  onClick?: () => void;
  icon?: ReactNode;
  secondIcon?: StaticImageData;
  size?: number;
  color?: string;
  alt?: string;
}

export interface InputProps extends InputComponentsProps {
  /**
   * Function triggered on input change
   */
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Function triggered on input blur
   */
  // eslint-disable-next-line no-unused-vars
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Trailing button (icon or ReactNode) displayed inside the input
   */
  trailingButton?: ReactNode;

  /**
   * Leading button (icon or ReactNode) displayed inside the input
   */
  leadingButton?: ReactNode;

  /**
   * Input type
   */
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "search"
    | "url"
    | "date";

  /**
   * Input display mode (filled or outlined)
   */
  mode?: "filled" | "outlined";
  control: Control;
  disabled?: boolean;
  padding?: string;
  margin?: string;
}

/**
 * CustomInput component
 *
 * @description A customizable input field with optional buttons, error and warning messages.
 *
 * @param {InputProps} props - Properties for the input component
 */
const CustomInput = ({
  id,
  labelText,
  style,
  value,
  warnText,
  leadingButton,
  trailingButton,
  width,
  height = "56px",
  registerOptions,
  type = "text",
  placeholder = "Type here",
  $status = "none",
  errorText,
  mode = "filled",
  control,
  isRequired,
  disabled,
  margin,
  padding,
  ...props
}: InputProps) => {
  const { field, fieldState } = useController({
    name: id,
    control,
    rules: registerOptions,
    defaultValue: value,
    disabled,
  });

  const { errorMessageText, internalStatus } = useCustomInput({
    errorText,
    fieldState,
    status: $status,
    value: field.value,
  });

  return (
    <InputContainer
      margin={margin}
      padding={padding}
      width={width}>
      {labelText && <Label mode={mode}>{labelText}</Label>}
      <ContentContainer
        backgroundColor={style?.$backgroundColor}
        mode={mode}
        $status={internalStatus}
        height={height}>
        {leadingButton}
        <InputComponent
          placeholder={placeholder}
          type={type}
          required={isRequired}
          {...field}
          {...props}
        />
        {trailingButton}
      </ContentContainer>
      {internalStatus === "invalid" && (
        <ErrorText>{errorMessageText}</ErrorText>
      )}
      {internalStatus === "warning" && <WarningText>{warnText}</WarningText>}
    </InputContainer>
  );
};

/**
 * OutlinedInput component
 *
 * @description A version of the CustomInput component with outlined styling.
 *
 * @param {InputProps} props - Properties for the input component
 */
const OutlinedInput = (props: InputProps) => {
  const { height, labelText, type, placeholder } = props;
  return (
    <CustomInput
      {...props}
      mode="outlined"
      height={height ?? "56px"}
      labelText={labelText ?? "Label"}
      type={type ?? "text"}
      placeholder={placeholder || "Placeholder"}
    />
  );
};

export { CustomInput, OutlinedInput };
