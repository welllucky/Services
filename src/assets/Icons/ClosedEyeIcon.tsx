import { IconProps } from "@/types";
import { EyeSlash } from "@phosphor-icons/react";

export const ClosedEyeIcon = ({
  size = 40,
  alt = "esconder",
  color,
  onClick,
}: IconProps) => (
  <EyeSlash
    size={size}
    color={color}
    onClick={onClick}
    alt={alt}
  />
);
