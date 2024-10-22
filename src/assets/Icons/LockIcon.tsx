import { IconProps } from "@/types";
import { Lock } from "@phosphor-icons/react";

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
