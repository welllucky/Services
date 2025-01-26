import { useRouter } from "next/navigation";
import { CaretLeft } from "@phosphor-icons/react";
import { buildTestIds } from "@/utils/functions";
import { Container, TextBack } from "./styles";

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
  onClick,
}: BackButtonProps) => {
  const { back } = useRouter();
  return (
    <Container
      {...buildTestIds("back-button")}
      onClick={() => {
        // eslint-disable-next-line no-unused-expressions, @typescript-eslint/no-unused-expressions
        onClick ? onClick() : back();
      }}>
      <CaretLeft
        size={20}
        weight="bold"
        color={color || "black"}
        alt="voltar"
      />
      <TextBack
        {...buildTestIds("back-button-text")}
        fontWeight={fontWeight}
        color={color}>
        {actionText}
      </TextBack>
    </Container>
  );
};
