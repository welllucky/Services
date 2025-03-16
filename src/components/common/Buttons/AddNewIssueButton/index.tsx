"use client";

import { buildTestIds } from "@/utils";
import { Plus } from "@phosphor-icons/react";
import { useDebounce } from "@uidotdev/usehooks";
import { ButtonNewCalled } from "./styles";
import { AddNewIssueButtonProps } from "./types";

const AddNewIssueButton = ({
  size,
  $styles,
  onClick,
}: AddNewIssueButtonProps) => {
  const debouncedClick = useDebounce(() => onClick, 400);
  return (
    <ButtonNewCalled
      {...buildTestIds("add-new-issue-button")}
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

export { AddNewIssueButton };
