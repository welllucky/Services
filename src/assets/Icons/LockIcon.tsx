import { Lock } from "@phosphor-icons/react";

import { IconProps } from "@/types";

export const LockIcon = ({
  size = 40,
  onClick,
  alt = "close",
  color,
}: IconProps) => (
  <Lock
    size={size}
    color={color}
    alt={alt}
    onClick={onClick}
  />
);
