import { IconButtonProps } from "@/types";
import { CustomButton, CustomButtonAsLink, IconButtonWrapper } from "./styles";

const IconButton = ({
  icon,
  path,
  onClick,
  onHover,
  color = "#000000",
  width = "16",
  height = "16",
}: IconButtonProps) => (
  <IconButtonWrapper>
    {path && !onClick ? (
      <CustomButtonAsLink
        color={color}
        href={path}
        width={width}
        height={height}
        onHover={onHover}>
        {icon}
      </CustomButtonAsLink>
    ) : (
      <CustomButton
        color={color}
        width={width}
        height={height}
        onHover={onHover}
        onClick={onClick}>
        {icon}
      </CustomButton>
    )}
  </IconButtonWrapper>
);

export { IconButton };
