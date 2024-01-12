import Image, { StaticImageData } from "next/image";
import { ButtonComponent, ButtonContainer } from "./styles";

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
 * Botao customizado
 *
 *@param text - Texto do botao
 *@param color - Cor do texto
 *@param $backgroundColor - Cor do fundo
 *@param $borderColor - Cor da borda
 *@param onClick - Funcao de click
 *@param disabled - Desabilita o botao
 *@param icon - Icone do botao
 *@param iconSize - Tamanho do icone
 *@param alt - Texto alternativo do icone
 *@param width - Largura do botao
 *@param height - Altura do botao
 *@param mode - Modo do botao
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
      $backgroundColor={$backgroundColor}
      $borderColor={$borderColor}
      disabled={disabled}
      width={width}
      height={height}
      mode={mode}
      {...props}>
      <ButtonComponent
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
