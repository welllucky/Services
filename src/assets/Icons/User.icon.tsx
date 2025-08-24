import { User } from "@phosphor-icons/react";

import { IconProps } from "@/types";

export const UserIcon = ({
  size = 40,
  onClick,
  alt = "user",
  color,
  type = "regular",
}: IconProps) => (
  <User
    size={size}
    color={color}
    alt={alt}
    onClick={onClick}
    weight={type}
  />
);
