"use client";

import { ErrorText, WarningText } from "@/components/SupportText";
import { InputComponentsProps } from "@/types";
import { StaticImageData } from "next/image";
import { ChangeEvent, ReactNode } from "react";
import { ContentContainer, InputComponent, InputContainer, Label } from "./styles";

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

interface InputProps extends InputComponentsProps {
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  trailingButton?: ReactNode;
  leadingButton?: ReactNode;
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "search"
    | "url"
    | "date";
  mode?: "filled" | "outlined";
}

const CustomInput = ({
  id,
  labelText,
  style,
  value,
  warnText,
  leadingButton,
  trailingButton,
  width,
  height,
  register,
  registerOptions,
  type = "text",
  placeholder = "Digite aqui",
  $status = "none",
  errorText = "Houve um erro, tente novamente!",
  mode = "filled",
}: InputProps) => (
  <InputContainer width={width}>
    {labelText && <Label mode={mode}>{labelText}</Label>}
    <ContentContainer
      backgroundColor={style?.$backgroundColor}
      mode={mode}
      $status={$status}
      height={height}>
      {leadingButton}

      <InputComponent
        {...register(id, { ...registerOptions })}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {trailingButton}
    </ContentContainer>
    {$status === "invalid" && <ErrorText>{errorText}</ErrorText>}
    {$status === "warning" && <WarningText>{warnText}</WarningText>}
  </InputContainer>
);

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
