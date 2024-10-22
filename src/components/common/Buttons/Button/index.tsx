import { buildTestIds } from "@/utils/functions";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonComponent, ButtonContainer } from "./styles";

export interface CustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  textSize?: string | number;
  color?: string;
  $backgroundColor?: string;
  $borderColor?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  width?: string | number;
  height?: string | number;
  mode?: "filled" | "outlined";
}
/**
 * Botão customizado
 *
 *@param text - Texto do botão
 *@param color - Cor do texto
 *@param $backgroundColor - Cor do fundo
 *@param $borderColor - Cor da borda
 *@param onClick - Funcao de click
 *@param disabled - Desabilita o botão
 *@param icon - ícone do botão
 *@param width - Largura do botão
 *@param height - Altura do botão
 *@param mode - Modo do botão
 *
 */
export const CustomButton = ({
  text = "button",
  $backgroundColor = "grey",
  color = "black",
  $borderColor = "black",
  disabled = false,
  onClick,
  icon,
  width,
  height,
  mode = "filled",
  ...props
}: CustomButtonProps) => (
  <ButtonContainer
    {...buildTestIds(`button-container-${text}`)}
    $backgroundColor={$backgroundColor}
    $borderColor={$borderColor}
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
