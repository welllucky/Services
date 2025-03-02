import { IconButtonProps } from "@/types";
import { buildTestIds } from "@/utils";
import { CustomButton, IconButtonWrapper } from "./styles";

/**
 * IconButton component
 *
 * @description A button component that can render as a link or a button with an icon.
 * It supports customization for color, size, and behavior.
 *
 * @param {IconButtonProps} props - The properties for the IconButton component.
 * @param {ReactNode} props.children - The icon to display inside the button.
 * @param {() => void} [props.onClick] - The function to execute on button click.
 * @param {string} [props.color="#000000"] - The color of the icon.
 * @param {string} [props.width="16"] - The width of the icon.
 * @param {string} [props.height="16"] - The height of the icon.
 *
 * @example
 * <IconButton
 *   path="/home"
 *   color="#007bff"
 *   width="24"
 *   height="24"
 * >
 * <SomeIcon />
 * </IconButton>
 */
const IconButton = ({
  children,
  onClick,
  color = "#000000",
  height,
  width,
  name,
}: IconButtonProps) => (
  <IconButtonWrapper>
    <CustomButton
      {...buildTestIds(name ? `${name}-button` : "icon-button")}
      color={color}
      width={width}
      height={height}
      onClick={onClick}>
      {children}
    </CustomButton>
  </IconButtonWrapper>
);

export { IconButton };
