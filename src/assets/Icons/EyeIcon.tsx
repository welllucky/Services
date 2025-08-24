import { Eye } from "@phosphor-icons/react";

import { IconProps } from "@/types";

export const EyeIcon = ({
  size = 40,
  color,
  alt = "mostrar",
  onClick,
}: IconProps) => (
  <Eye
    size={size}
    color={color}
    alt={alt}
    onClick={onClick}
  />
);
