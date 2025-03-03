import { ReactNode } from "react";

type IconType = "fill" | "bold" | "duotone" | "regular" | "light" | "thin";

type IconProps = {
  width?: string | number;
  height?: string | number;
  size?: string | number;
  color?: string;
  alt?: string;
  onClick?: () => void;
  type?: IconType;
};

type OptionMenuStyleProps = {
  $isSelected?: boolean;
  $isPreselected?: boolean;
  $backgroundColor?: string;
  $highlightTextColor?: string;
};

type OptionMenuProps = {
  name: string;
  path: string;
  alt: string;
  icon: ReactNode;
  // eslint-disable-next-line no-unused-vars
  onClick?: (optionName: string) => void;
  $isSelected?: boolean;
  $isPreselected?: boolean;
  $isVisibled?: boolean;
  color?: string;
  $highlightTextColor?: string;
};

type IconButtonProps = {
  children: ReactNode;
  color?: string;
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  onHover?: () => void;
  name?: string;
};

type NoContentProps = {
  title?: string;
  icon?: string | ReactNode;
  alt?: string;
  color?: string;
  fontSize?: string;
};

type TextTheme = {
  theme?: string;
  title: string;
  text: string;
};

interface InputStylesProps {
  $backgroundColor?: string;
  textColor?: string;
  rightIcon?: string;
  leftIcon?: string;
  $borderColor?: string;
  width?: string;
  height?: string;
  mode?: "filled" | "outlined";
  placeholderColor?: string;
  padding?: string;
  margin?: string;
}

export type DataTag =
  | "ticket"
  | "company"
  | "issue"
  | "login"
  | "theme"
  | "recovery"
  | "register"
  | "security"
  | "user";

export * from "./abstractions";
export * from "./dto";
export * from "./interfaces";
export type * from "./themes";

export type {
  IconButtonProps,
  IconProps,
  IconType,
  InputStylesProps,
  NoContentProps,
  OptionMenuProps,
  OptionMenuStyleProps,
  TextTheme,
};
