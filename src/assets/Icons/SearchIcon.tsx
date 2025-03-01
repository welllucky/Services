import { IconProps } from "@/types";
import { MagnifyingGlass } from "@phosphor-icons/react";

export const SearchIcon = ({
  size = "40px",
  color = "black",
  type,
}: IconProps) => (
  <MagnifyingGlass
    size={size}
    color={color}
    weight={type}
  />
);
