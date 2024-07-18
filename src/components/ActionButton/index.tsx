import { IssueActionOptionsType } from "@/screens/chamado/components";
import {
  ArrowCounterClockwise,
  DotsThreeOutlineVertical,
  Play,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { RoundedButton } from "..";
import { ActionButtonContainer, ActionButtonsContainer } from "./styles";

interface ActionButtonProps {
  isIssueOpen: boolean;
  canReopenIssue: boolean;
  actionOptions: IssueActionOptionsType[];
  openAction: () => void;
  reopenAction: () => void;
}

interface PrincipalIssueButtonProps
  extends Pick<ActionButtonProps, "isIssueOpen" | "canReopenIssue"> {
  action: () => void;
  $isClicked: boolean;
}

const PrincipalIssueButton = ({
  isIssueOpen,
  canReopenIssue,
  action,
  $isClicked,
}: PrincipalIssueButtonProps) => {
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

const ActionButton = ({
  isIssueOpen = false,
  canReopenIssue = false,
  openAction,
  reopenAction,
  actionOptions,
}: ActionButtonProps) => {
  const theme = useTheme();
  const [isOptionsOpen, setIsOptionsOpen] = useState(isIssueOpen);

  useEffect(() => {
    if (canReopenIssue) {
      setIsOptionsOpen(false);
    }
  }, [canReopenIssue]);

  const actionCallback = () => {
    if (isIssueOpen) {
      setIsOptionsOpen((state) => !state);
      return;
    }

    if (canReopenIssue) {
      reopenAction();
      setIsOptionsOpen(true);
      return;
    }

    if (!isIssueOpen) {
      openAction();
      setIsOptionsOpen(true);
    }
  };

  return (
    <ActionButtonContainer>
      <ActionButtonsContainer $isVisible={isOptionsOpen}>
        {actionOptions
          .toReversed()
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
        action={actionCallback}
      />
    </ActionButtonContainer>
  );
};

export { ActionButton };
