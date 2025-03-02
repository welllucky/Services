import { ButtonHTMLAttributes, ReactNode } from "react";

export interface CustomButtonProps
  extends Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "type" | "form" | "value"
  > {
  text?: string;
  textSize?: string | number;
  color?: string;
  $backgroundColor?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  width?: string | number;
  height?: string | number;
  mode?: "filled" | "outlined";
}
