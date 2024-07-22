import { useTicket } from "@/utils";

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

export const IssueActionButton = () => {
  const { status, initialize, close, reOpen } = useTicket();

  const ticketOptions = [
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
        close();
      },
    },
  ] satisfies IssueActionOptionsType[];

  console.log({ status });

  return (
    <UserActionContainer>
      <ActionButton
        isIssueOpen={status === "inProgress"}
        canReopenIssue={status === "closed" || status === "blocked"}
        actionOptions={ticketOptions}
        openAction={initialize}
        reopenAction={reOpen}
      />
    </UserActionContainer>
  );
};
