import { theme } from "@/styles";
import { buildTestIds } from "@/utils/functions";
import { ButtonComponent, ButtonContainer } from "./styles";
import { CustomButtonProps } from "./types";

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
const CustomButton = ({
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
}: CustomButtonProps) => {
  console.log({ color: $backgroundColor });
  return (
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
};

export { CustomButton };
