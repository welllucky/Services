import Image, { StaticImageData } from "next/image";
import { ButtonComponent, ButtonContainer } from "./styles";
import { buildTestIds } from "@/utils/functions";

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  color?: string;
  $backgroundColor?: string;
  $borderColor?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: StaticImageData;
  iconSize?: number;
  alt?: string;
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
 *@param iconSize - Tamanho do ícone
 *@param alt - Texto alternativo do ícone
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
  iconSize = 20,
  alt,
  width,
  height,
  mode = "filled",
  ...props
}: CustomButtonProps) => {
  return (
    <ButtonContainer
      {...buildTestIds(`button-container-${text}`)}
      $backgroundColor={$backgroundColor}
      $borderColor={$borderColor}
      disabled={disabled}
      width={width}
      height={height}
      mode={mode}
      {...props}>
      <ButtonComponent
        {...buildTestIds(`button-component-${text}`)}
        form=""
        type={props.type ?? "button"}
        onClick={onClick}
        disabled={disabled}
        color={color}
        {...props}>
        {icon && (
          <Image
            src={icon}
            alt={alt as string}
            width={iconSize}
            height={iconSize}
          />
        )}
        {text}
      </ButtonComponent>
    </ButtonContainer>
  );
};
