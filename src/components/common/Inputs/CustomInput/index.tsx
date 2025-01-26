"use client";

import { ErrorText, WarningText } from "@/components/SupportText";
import { InputComponentsProps, InputStatus } from "@/types";
import { StaticImageData } from "next/image";
import { ChangeEvent, ReactNode, useMemo } from "react";
import { Control, useController } from "react-hook-form";
import {
  ContentContainer,
  InputComponent,
  InputContainer,
  Label,
} from "./styles";

export interface InputStylesProps {
  $backgroundColor?: string;
  textColor?: string;
  rightIcon?: string;
  leftIcon?: string;
  $borderColor?: string;
  width?: string;
  height?: string;
  mode?: "filled" | "outlined";
  placeholderColor?: string;
}

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
  // onBlur,
  // onChange,
  disabled,
}: InputProps) => {
  const { field, fieldState } = useController({
    name: id,
    control,
    rules: registerOptions,
    defaultValue: value,
    disabled,
  });

  const dateFieldSuccessValidation =
    typeof field.value !== "undefined" &&
    field.value !== null &&
    field.value !== "";

  const hasErrorState = useMemo(
    () =>
      Boolean(
        $status === "invalid" ||
          Boolean(fieldState.error || fieldState.invalid),
      ),
    [fieldState.error, fieldState.invalid, $status],
  );

  const hasSuccessState = useMemo(() => {
    return (
      Boolean($status === "valid" || dateFieldSuccessValidation) &&
      !hasErrorState
    );
  }, [$status, dateFieldSuccessValidation, hasErrorState]);

  const errorMessageText = useMemo(
    () =>
      errorText ??
      fieldState?.error?.message ??
      fieldState?.error?.root?.message,
    [fieldState.error?.message, fieldState.error?.root?.message, errorText],
  );

  const internalStatus: InputStatus = useMemo(() => {
    if (hasErrorState) return "invalid";
    if (hasSuccessState) return "valid";
    if ($status === "warning") return "warning";
    return "none";
  }, [hasErrorState, hasSuccessState, $status]);

  return (
    <InputContainer width={width}>
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
