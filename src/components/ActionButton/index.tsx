import {
  ArrowCounterClockwise,
  DotsThreeOutlineVertical,
  Play,
} from "@phosphor-icons/react";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components";

import { TicketActionOptionsType } from "@/screens/Ticket/components";

import { RoundedButton } from "..";
import { ActionButtonContainer, ActionButtonsContainer } from "./styles";

interface ActionButtonProps {
  isOpen: boolean;
  canReopen: boolean;
  actionOptions: TicketActionOptionsType[];
  openAction: () => void;
  reopenAction: () => void;
}

interface PrincipalIssueButtonProps
  extends Pick<ActionButtonProps, "isOpen" | "canReopen"> {
  action: () => void;
  $isClicked: boolean;
}

const PrincipalIssueButton = ({
  isOpen,
  canReopen,
  action,
  $isClicked,
}: PrincipalIssueButtonProps) => {
  const theme = useTheme();

  const getIcon = () => {
    if (isOpen) {
      return (
        <DotsThreeOutlineVertical
          size={32}
          color={
            $isClicked
              ? theme.colors.neutral.default
              : theme.colors.primary.default
          }
        />
      );
    }

    if (canReopen) {
      return (
        <ArrowCounterClockwise
          size={32}
          color="#FFFFFF"
        />
      );
    }

    return (
      <Play
        size={32}
        color="#FFFFFF"
      />
    );
  };

  return (
    <RoundedButton
      action={action}
      $isClicked={$isClicked}
      $hasShadow={isOpen}
      color={isOpen ? theme.colors.primary["85"] : theme.colors.primary["15"]}
      icon={getIcon()}
    />
  );
};

const ActionButton = ({
  isOpen = false,
  canReopen = false,
  openAction,
  reopenAction,
  actionOptions,
}: ActionButtonProps) => {
  const theme = useTheme();
  const [isOptionsOpen, setIsOptionsOpen] = useState(isOpen);

  useEffect(() => {
    if (canReopen) {
      setIsOptionsOpen(false);
    }
  }, [canReopen]);

  const actionCallback = useCallback(() => {
    if (isOpen) {
      setIsOptionsOpen((state) => !state);
      return;
    }

    if (canReopen) {
      reopenAction();
      setIsOptionsOpen(true);
      return;
    }

    if (!isOpen) {
      openAction();
      setIsOptionsOpen(true);
    }
  }, [isOpen, canReopen, openAction, reopenAction]);

  return (
    <ActionButtonContainer>
      <ActionButtonsContainer $isVisible={isOptionsOpen}>
        {actionOptions
          .toReversed()
          .filter((option) => option.isActive)
          .map((option) => (
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
          ))}
      </ActionButtonsContainer>

      <PrincipalIssueButton
        $isClicked={isOptionsOpen}
        isOpen={isOpen}
        canReopen={canReopen}
        action={actionCallback}
      />
    </ActionButtonContainer>
  );
};

export { ActionButton };
