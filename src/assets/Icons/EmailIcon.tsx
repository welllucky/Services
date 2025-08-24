import { EnvelopeSimple } from "@phosphor-icons/react";

import { IconProps } from "@/types";

export const EmailIcon = ({
  color,
  size = 40,
  onClick,
  alt = "Email",
}: IconProps) => (
  <EnvelopeSimple
    size={size}
    alt={alt}
    color={color}
    onClick={onClick}
  />
);
