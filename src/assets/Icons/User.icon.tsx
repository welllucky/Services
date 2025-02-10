import { IconProps } from "@/types";
import { User } from "@phosphor-icons/react";

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
