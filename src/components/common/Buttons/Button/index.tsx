import { theme } from "@/styles";
import { buildTestIds } from "@/utils/functions";
import { useState } from "react";
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
 * @param isLoading - External loading state control
 * @param loadingText - Text to show when loading
 * @param onAsyncClick - Async click handler with automatic loading state
 *
 * @example
 * <CustomButton
 *   text="Submit"
 *   loadingText="Submitting..."
 *   onAsyncClick={async () => {
 *     await someAsyncOperation();
 *   }}
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
  isLoading: externalLoading = false,
  loadingText,
  onAsyncClick,
  ...props
}: CustomButtonProps) => {
  const [internalLoading, setInternalLoading] = useState(false);

  const isLoading = externalLoading || internalLoading;
  const isDisabled = disabled || isLoading;
  const displayText = isLoading && loadingText ? loadingText : text;

  const handleAsyncClick = async () => {
    if (!onAsyncClick || isLoading) return;

    setInternalLoading(true);

    try {
      await onAsyncClick();
    } finally {
      setInternalLoading(false);
    }
  };

  const handleClick = () => {
    if (onAsyncClick) {
      handleAsyncClick();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <ButtonContainer
      {...buildTestIds(`button-container-${text}`)}
      $backgroundColor={$backgroundColor}
      disabled={isDisabled}
      width={width}
      height={height}
      mode={mode}
      {...props}>
      {icon}
      <ButtonComponent
        {...buildTestIds(`button-component-${text}`)}
        form={props.form}
        type={props.type ?? "button"}
        onClick={handleClick}
        disabled={isDisabled}
        color={color}
        {...props}>
        {displayText}
      </ButtonComponent>
    </ButtonContainer>
  );
};

export { CustomButton };
