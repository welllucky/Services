import { IconContainer, IconImage } from "./styles";

interface IconProps {
  // skipcq: JS-0323
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src?: any;
  alt?: string;
  // color?: string;
  size?: number;
  onClick?: () => void;
  $hasPadding?: boolean;
}

function Icon({ src, alt, onClick, size, $hasPadding = false }: IconProps) {
  return (
    <IconContainer
      $hasPadding={$hasPadding}
      onClick={onClick}>
      <IconImage
        src={src}
        alt={alt || "ícone"}
        width={size}
        height={size}
      />
    </IconContainer>
  );
}

export { Icon };
