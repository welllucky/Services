import { IconProps } from "@/types";
import { Funnel } from "@phosphor-icons/react";

/* eslint-disable react/style-prop-object */
export const FilterIcon = ({ alt, color, size }: IconProps) => (
  <Funnel
    size={size}
    alt={alt}
    color={color}
  />
);
