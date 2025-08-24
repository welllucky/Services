import { Funnel } from "@phosphor-icons/react";

import { IconProps } from "@/types";

/* eslint-disable react/style-prop-object */
export const FilterIcon = ({ alt, color, size }: IconProps) => (
  <Funnel
    size={size}
    alt={alt}
    color={color}
  />
);
