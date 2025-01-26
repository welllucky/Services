import { theme } from "@/styles";
import { buildTestIds } from "@/utils/functions";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonComponent, ButtonContainer } from "./styles";

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
/**
 * Custom button
 *
 * @description Custom button with icon, text, and personalized colors
 * @param text - Button text
 * @param color - Text color
 * @param $backgroundColor - Background color
 * @param onClick - Click function
 * @param disabled - Disables the button
 * @param icon - Button icon
 * @param width - Button width
 * @param height - Button height
 * @param mode - Button mode
 *
 * @example
 * <CustomButton
 *   text="Submit"
 *   color="#fff"
 *   $backgroundColor="#007bff"
 *   onClick={() => console.log('Button clicked')}
 *   disabled={false}
 *   icon={<SomeIcon />}
 *   width="100px"
 *   height="40px"
 *   mode="filled"
 * />
 */
export const CustomButton = ({
  text = "continuar",
  $backgroundColor = theme.colors.primary.default,
  color = theme.colors.neutral.default,
  mode = "filled",
  disabled = false,
  onClick,
  icon,
  width,
  height,
  ...props
}: CustomButtonProps) => (
  <ButtonContainer
    {...buildTestIds(`button-container-${text}`)}
    $backgroundColor={$backgroundColor}
    disabled={disabled}
    width={width}
    height={height}
    mode={mode}
    {...props}>
    {icon}
    <ButtonComponent
      {...buildTestIds(`button-component-${text}`)}
      form={props.form}
      type={props.type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      color={color}
      {...props}>
      {text}
    </ButtonComponent>
  </ButtonContainer>
);
