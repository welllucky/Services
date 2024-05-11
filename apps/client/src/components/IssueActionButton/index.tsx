/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-wrap-multilines */
import {
  ArrowCounterClockwise,
  DotsThreeOutlineVertical,
  Play,
} from "@phosphor-icons/react";
import { useState } from "react";
import { useTheme } from "styled-components";
import toast from "react-hot-toast";
import { RoundedButton } from "..";
import { ActionButtonsContainer, IssueActionButtonContainer } from "./styles";
import { IssueActionOptionsData } from "./data";

interface ActionButtonProps {
  action?: () => void;
}

const PrincipalIssueButton = ({
  isIssueOpen,
  canReopenIssue,
  action,
  $isClicked,
}: ActionButtonProps & {
  isIssueOpen: boolean;
  $isClicked: boolean;
  canReopenIssue: boolean;
}) => {
  const theme = useTheme();
  return (
    <RoundedButton
      action={action}
      $isClicked={$isClicked}
      $hasShadow={isIssueOpen}
      color={
        isIssueOpen ? theme.colors.primary["85"] : theme.colors.primary["15"]
      }
      icon={
        isIssueOpen ? (
          <DotsThreeOutlineVertical
            size={32}
            color={
              $isClicked
                ? theme.colors.neutral.default
                : theme.colors.primary.default
            }
          />
        ) : canReopenIssue ? (
          <ArrowCounterClockwise
            size={32}
            color="#FFFFFF"
          />
        ) : (
          <Play
            size={32}
            color="#FFFFFF"
          />
        )
      }
    />
  );
};

const IssueActionButton = () => {
  const theme = useTheme();
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isIssueOpen, setIsIssueOpen] = useState(false);
  const canReopenIssue = false;
  const handleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const startIssueExecution = () => {
    setIsIssueOpen(true);
    toast.success("Chamado iniciado!");
  };

  return (
    <IssueActionButtonContainer>
      <ActionButtonsContainer $isVisible={isOptionsOpen}>
        {IssueActionOptionsData.toReversed()
          .filter((option) => option.isActive)
          .map((option) => {
            return (
              <RoundedButton
                $hasShadow
                key={option.title}
                icon={option.icon}
                action={option.action}
                color={
                  option.title.toLowerCase() === "finalizar"
                    ? theme.colors.secondary["75"]
                    : theme.colors.primary["85"]
                }
              />
            );
          })}
      </ActionButtonsContainer>

      <PrincipalIssueButton
        $isClicked={isOptionsOpen}
        isIssueOpen={isIssueOpen}
        canReopenIssue={canReopenIssue}
        action={isIssueOpen ? handleOptions : startIssueExecution}
      />
    </IssueActionButtonContainer>
  );
};

export default IssueActionButton;
