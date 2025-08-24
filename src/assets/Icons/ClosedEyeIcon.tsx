import { EyeSlash } from "@phosphor-icons/react";

import { IconProps } from "@/types";

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
