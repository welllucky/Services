import { ReactNode } from "react";
import { RoundedButtonContainer } from "./styles";

interface RoundedButtonProps {
  action?: () => void;
  icon: ReactNode;
  color?: string;
  $isClicked?: boolean;
  $hasShadow?: boolean;
}

const RoundedButton = ({
  action,
  icon,
  color,
  $isClicked,
  $hasShadow,
}: RoundedButtonProps) => {
  return (
    <RoundedButtonContainer
      color={color}
      onClick={action}
      $isClicked={$isClicked}
      $hasShadow={$hasShadow}>
      {icon}
    </RoundedButtonContainer>
  );
};

export { RoundedButton };
