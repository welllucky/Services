import { Container, BackIcon, TextBack } from "./styles";
import { useRouter } from "next/navigation";
import { CaretLeft} from "@phosphor-icons/react";
import { buildTestIds } from "@/utils/functions";
export interface BackButtonProps {
  actionText?: string;
  color?: string;
  fontWeight?: string;
  onClick?: () => void;
}

export const BackButton = ({
  actionText,
  color,
  fontWeight,
  onClick
}: BackButtonProps) => {
  const { back } = useRouter();
  return (
    <Container
    {...buildTestIds("back-button")}
      onClick={() => {
        onClick ? onClick() : back();
      }}>
      <CaretLeft size={20} color={color || "black"} alt="voltar" />
      <TextBack
      {...buildTestIds("back-button-text")}
      fontWeight={fontWeight} color={color}>
        {actionText}
      </TextBack>
    </Container>
  );
};
