import { IconButtonProps } from "@/types";
import { CustomButton, IconButtonWrapper } from "./styles";

/**
 * IconButton component
 *
 * @description A button component that can render as a link or a button with an icon.
 * It supports customization for color, size, and behavior.
 *
 * @param {IconButtonProps} props - The properties for the IconButton component.
 * @param {ReactNode} props.icon - The icon to display inside the button.
 * @param {() => void} [props.onClick] - The function to execute on button click.
 * @param {string} [props.color="#000000"] - The color of the icon.
 * @param {string} [props.width="16"] - The width of the icon.
 * @param {string} [props.height="16"] - The height of the icon.
 *
 * @example
 * <IconButton
 *   icon={<SomeIcon />}
 *   path="/home"
 *   color="#007bff"
 *   width="24"
 *   height="24"
 * />
 */
const IconButton = ({
  icon,
  onClick,
  color = "#000000",
  width = "16",
  height = "16",
}: IconButtonProps) => (
  <IconButtonWrapper>
    <CustomButton
      color={color}
      width={width}
      height={height}
      onClick={onClick}>
      {icon}
    </CustomButton>
  </IconButtonWrapper>
);

export { IconButton };
