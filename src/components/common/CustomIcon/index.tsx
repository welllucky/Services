import { IconContainer, IconImage } from "./styles";

interface IconProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src?: any;
  alt?: string;
  // color?: string;
  size?: number;
  onClick?: () => void;
  $hasPadding?: boolean;
}

const Icon = ({ src, alt, onClick, size, $hasPadding = false }: IconProps) => (
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

export { Icon };
