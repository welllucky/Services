import { XCircle } from "@phosphor-icons/react";

import { IconProps } from "@/types";

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
