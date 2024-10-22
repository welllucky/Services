import { IconProps } from "@/types";
import { XCircle } from "@phosphor-icons/react";

export const ClearIcon = ({
  size = 40,
  onClick,
  alt = "close",
  color,
}: IconProps) => (
  <XCircle
    size={size}
    color={color}
    alt={alt}
    onClick={onClick}
  />
);
