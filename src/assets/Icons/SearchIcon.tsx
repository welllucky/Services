import { MagnifyingGlass } from "@phosphor-icons/react";

import { IconProps } from "@/types";

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
