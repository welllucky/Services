import { MouseEventHandler, ReactNode } from "react";

type IconProps = {
  width?: string | number;
  height?: string | number;
  size?: string | number;
  color?: string;
  alt?: string;
  onClick?: () => void;
};

type OptionMenuStyleProps = {
  $isSelected?: boolean;
  $backgroundColor?: string;
  $highlightTextColor?: string;
};

type OptionMenuProps = {
  name: string;
  path: string;
  alt: string;
  icon: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  $isSelected?: boolean;
  $isVisibled?: boolean;
  color?: string;
  $highlightTextColor?: string;
};

type IconButtonProps = {
  path?: string;
  icon: ReactNode;
  color?: string;
  width?: string;
  height?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  onHover?: MouseEventHandler<HTMLButtonElement> | undefined;
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

export type * from "./DataTag";
export type * from "./Dto";
export type * from "./Interfaces";
export type * from "./Themes";

export type {
  IconButtonProps,
  IconProps,
  NoContentProps,
  OptionMenuProps,
  OptionMenuStyleProps,
  TextTheme,
};
