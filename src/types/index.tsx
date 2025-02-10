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
  icon: ReactNode;
  color?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
  onHover?: () => void;
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

export * from "./dto";
export * from "./Interfaces";
export type * from "./themes";

export type {
  IconButtonProps,
  IconProps,
  NoContentProps,
  OptionMenuProps,
  OptionMenuStyleProps,
  TextTheme,
  IconType,
};
