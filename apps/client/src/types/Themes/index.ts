import { InputStylesProps } from "@/components";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

// type ThemeKey = {
//   [key: string]: string;
// };

// type ThemeModule = {
//   [key: string]: ThemeKey[];
// };

// type ThemeSection = {
//   [key: string]: ThemeModule[];
// };

type ThemeProps = {
  media: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    mobileXL: string;
    tabletS: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktopS: string;
    desktop: string;
  };
  colors: {
    neutral: {
      [key: string]: string;
      default: string;
      inverted: string;
      opacity: string;
    };
    green: {
      [key: string]: string;
      default: string;
    };
    parGreen: {
      [key: string]: string;
      default: string;
    };
  };
};

interface InputComponentsProps {
  id: string;
  value?: string;
  placeholder?: string;
  $status: "valid" | "invalid" | "warning" | "none";
  errorText?: string;
  warnText?: string;
  labelText?: string;
  style?: InputStylesProps;
  width?: string;
  height?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  isRequired?: boolean;
}

export type { ThemeProps, InputComponentsProps };
