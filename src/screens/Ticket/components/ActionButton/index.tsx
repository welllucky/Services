/* eslint-disable no-console */
// import { issueApi, useIssue } from "@/utils";

import { ActionButton } from "@/components/ActionButton";
import { theme } from "@/styles";
import { ChatCircleText, Check } from "@phosphor-icons/react";
import { ReactNode } from "react";
import { UserActionContainer } from "./styles";

type UserList = "resolver" | "creator" | "viewer";

export interface IssueActionOptionsType {
  index: number;
  icon: ReactNode;
  title: string;
  userList: UserList[];
  action: () => void;
  isActive?: boolean;
}

export interface ActionsStateType {
  shouldStart?: boolean;
  shouldClose?: boolean;
  shouldReopen?: boolean;
}

export const IssueActionButton = () => {
  const IssueOptions = [
    {
      index: 1,
      icon: (
        <ChatCircleText
          color={theme.colors.primary.default}
          size={20}
        />
      ),
      title: "Comentar",
      userList: ["resolver", "creator"],
      isActive: true,
      action: () => {
        console.log("Comentar");
      },
    },
    {
      index: 2,
      icon: (
        <Check
          color={theme.colors.primary.default}
          size={20}
        />
      ),
      userList: ["resolver"],
      isActive: true,
      title: "Finalizar",
      action: () => {
        console.log("Finalizar");
      },
    },
  ] satisfies IssueActionOptionsType[];

  const status = "inProgress";

  return (
    <UserActionContainer>
      <ActionButton
        isIssueOpen={status === "inProgress"}
        canReopenIssue={status !== "inProgress"}
        actionOptions={IssueOptions}
        openAction={() => console.log("Open")}
        reopenAction={() => console.log("Reopen")}
      />
    </UserActionContainer>
  );
};
