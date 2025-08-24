import { ReactNode } from "react";

import { RoundedButtonContainer } from "./styles";

/**
 * RoundedButton component
 *
 * @description A button with a circular design, supporting an icon, action, and customizable styles.
 *
 * @param {RoundedButtonProps} props - The properties for the RoundedButton component.
 * @param {() => void} [props.action] - The function to execute when the button is clicked.
 * @param {ReactNode} props.icon - The icon displayed inside the button.
 * @param {string} [props.color] - The color of the button background.
 * @param {boolean} [props.$isClicked] - Indicates if the button is in a clicked state.
 * @param {boolean} [props.$hasShadow] - Determines if the button has a shadow effect.
 *
 * @example
 * <RoundedButton
 *   action={() => alert("Button clicked!")}
 *   icon={<SomeIcon />}
 *   color="#007bff"
 *   $isClicked={false}
 *   $hasShadow={true}
 * />
 */
export interface RoundedButtonProps {
  action?: () => void;
  icon: ReactNode;
  color?: string;
  $isClicked?: boolean;
  $hasShadow?: boolean;
}

const RoundedButton = ({
  action,
  icon,
  color,
  $isClicked,
  $hasShadow,
}: RoundedButtonProps) => (
  <RoundedButtonContainer
    color={color}
    onClick={action}
    $isClicked={$isClicked}
    $hasShadow={$hasShadow}>
    {icon}
  </RoundedButtonContainer>
);

export { RoundedButton };
