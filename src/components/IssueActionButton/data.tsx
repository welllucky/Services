import { theme } from "@/styles";
import { ChatCircleText, Check } from "@phosphor-icons/react";
import { ReactNode } from "react";

type UserList = "resolver" | "creator" | "viewer";

export interface IssueActionOptionsType {
  index: number;
  icon: ReactNode;
  title: string;
  userList: UserList[];
  action: () => void;
  isActive?: boolean;
}

export const IssueActionOptionsData = [
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
