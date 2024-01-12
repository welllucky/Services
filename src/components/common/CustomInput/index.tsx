"use client";

import {
  InputContainer,
  InputComponent,
  ContentContainer,
  Label
} from "./styles";
import { ErrorText, Icon, WarningText } from "../..";
import { StaticImageData } from "next/image";
import { InputComponentsProps } from "@/assets";

export interface InputStylesProps {
  $backgroundColor?: string;
  textColor?: string;
  rightIcon?: string;
  leftIcon?: string;
  borderColor?: string;
  width?: string;
  height?: string;
  mode?: "filled" | "outlined";
  placeholderColor?: string;
}

export interface ActionButton {
  onClick?: () => void;
  icon?: StaticImageData;
  secondIcon?: StaticImageData;
  size?: number;
  color?: string;
  alt?: string;
}

interface InputProps extends InputComponentsProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  trailingButton?: ActionButton;
  leadingButton?: ActionButton;
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
  type = "text",
  placeholder = "Digite aqui",
  $status = "none",
  labelText,
  errorText = "Houve um erro, tente novamente!",
  onChange,
  style,
  value,
  warnText,
  mode = "filled",
  leadingButton,
  trailingButton,
  width,
  height,
  register,
  registerOptions = {},
  isRequired = false
}: InputProps) => {
  return (
    <InputContainer width={width}>
      {labelText && <Label mode={mode}>{labelText}</Label>}
      <ContentContainer
        backgroundColor={style?.$backgroundColor}
        mode={mode}
        $status={$status}
        height={height}>
        {leadingButton && (
          <Icon
            src={leadingButton?.icon}
            alt={leadingButton?.alt}
            onClick={leadingButton?.onClick}
            size={leadingButton?.size}
            $hasPadding
            alternate={leadingButton?.secondIcon}
          />
        )}

        <InputComponent
          {...register(id, {
            ...registerOptions,
            required: isRequired
              ? "Este campo é obrigatório"
              : registerOptions.required
                ? registerOptions.required
                : false,
            onChange: (e) => {
              if (onChange) onChange(e);
              if (registerOptions.onChange) registerOptions.onChange(e);
            }
          })}
          placeholder={placeholder}
          type={type}
          value={value}
        />
        {trailingButton && (
          <Icon
            src={trailingButton?.icon}
            alt={trailingButton?.alt}
            onClick={trailingButton?.onClick}
            $hasPadding
            // alternate={trailingButton?.secondIcon}
          />
        )}
      </ContentContainer>
      {$status === "invalid" && <ErrorText>{errorText}</ErrorText>}
      {$status === "warning" && <WarningText>{warnText}</WarningText>}
    </InputContainer>
  );
};

const OutlinedInput = (props: InputProps) => {
  return (
    <CustomInput
      {...props}
      mode="outlined"
      height={props.height || "56px"}
      labelText={props.labelText || "Label"}
      type={props.type || "text"}
      placeholder={props.placeholder || "Placeholder"}
    />
  );
};

export { CustomInput, OutlinedInput };
