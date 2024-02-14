import { useState } from "react";
import { IconContainer, IconImage } from "./styles";

interface IconProps {
  // skipcq: JS-0323
  src?: any;
  // skipcq: JS-0323
  alternate?: any;
  alt?: string;
  color?: string;
  size?: number;
  onClick?: () => void;
  $hasPadding?: boolean;
}

const Icon = ({ src, alt, onClick, size, $hasPadding = false }: IconProps) => {
  return (
    <IconContainer $hasPadding={$hasPadding} onClick={onClick}>
      <IconImage src={src} alt={alt || "ícone"} width={size} height={size} />
    </IconContainer>
  );
};

export { Icon };
