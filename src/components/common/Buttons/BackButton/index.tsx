import { buildTestIds } from "@/utils/functions";
import { CaretLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
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

  const backButtonCallback = () => {
    if (onClick) {
      onClick();
    } else {
      back();
    }
  };
  return (
    <Container
      {...buildTestIds("back-button")}
      onClick={backButtonCallback}>
      <CaretLeft
        size={20}
        weight="bold"
        color={color ?? "black"}
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
