import { IconButtonProps } from "@/types";
import { CustomButton, CustomButtonAsLink, IconButtonWrapper } from "./styles";

const IconButton = ({
  icon,
  path,
  onClick,
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
        height={height}>
        {icon}
      </CustomButtonAsLink>
    ) : (
      <CustomButton
        color={color}
        width={width}
        height={height}
        onClick={onClick}>
        {icon}
      </CustomButton>
    )}
  </IconButtonWrapper>
);

export { IconButton };
