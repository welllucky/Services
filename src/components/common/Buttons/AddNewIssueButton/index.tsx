import { Plus } from "@phosphor-icons/react";

import { useDebounce } from "@uidotdev/usehooks";
import { ButtonNewCalled } from "./styles";

interface AddNewIssueButtonStyleProps {
  iconColor?: string;
  iconSize?: number;
  $backgroundColor?: string;
  borderRadius?: number;
  hasShadow?: boolean;
}

export interface AddNewIssueButtonProps {
  size?: number;
  // icon?: string;
  $styles?: AddNewIssueButtonStyleProps;
  onClick: () => void;
}

export const AddNewIssueButton = ({
  size,
  $styles,
  onClick,
}: AddNewIssueButtonProps) => {
  const debouncedClick = useDebounce(() => onClick, 400);
  return (
    <ButtonNewCalled
      $styles={$styles}
      size={size}
      onClick={debouncedClick}>
      <Plus
        size={26}
        color="#7AC143"
      />
    </ButtonNewCalled>
  );
};
