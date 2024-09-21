import { ticketApi, useTicket } from "@/utils";

import { ActionButton } from "@/components/ActionButton";
import { theme } from "@/styles";
import { ChatCircleText, Check } from "@phosphor-icons/react";
import { ReactNode, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
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
  const [actionsState, setActionsState] = useReducer(
    (state: ActionsStateType, newState: ActionsStateType) => ({
      ...state,
      ...newState,
    }),
    {
      shouldStart: false,
      shouldClose: false,
      shouldReopen: false,
    },
  );

  const { status, id, close, initialize, reOpen } = useTicket();
  const {
    isLoading: isLoadingStart,
    data: dataStart,
    error: errorStart,
  } = ticketApi.startTicket(id, actionsState.shouldStart);
  const {
    isLoading: isLoadingClose,
    data: dataClose,
    error: errorClose,
  } = ticketApi.closeTicket(id, actionsState.shouldClose);
  const {
    isLoading: isLoadingReopen,
    data: dataReopen,
    error: errorReopen,
  } = ticketApi.reopenTicket(id, actionsState.shouldReopen);

  useEffect(() => {
    if (actionsState.shouldStart && !isLoadingStart) {
      setActionsState({
        shouldStart: false,
      });
      initialize();
    }

    if (errorStart) {
      toast.error("Erro ao iniciar chamado");
    }

    if (actionsState.shouldClose && !isLoadingClose) {
      setActionsState({
        shouldClose: false,
      });
      close();
    }

    if (errorClose) {
      toast.error("Erro ao finalizar chamado");
    }

    if (actionsState.shouldReopen && !isLoadingReopen) {
      toast.success("Chamado reaberto com sucesso!");
      setActionsState({
        shouldReopen: false,
      });
      reOpen();
    }

    if (errorReopen) {
      toast.error("Erro ao reabrir chamado");
    }
  }, [
    close,
    dataClose,
    dataReopen,
    dataStart,
    errorClose,
    errorReopen,
    errorStart,
    initialize,
    isLoadingClose,
    isLoadingReopen,
    isLoadingStart,
    reOpen,
  ]);

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
        setActionsState({
          shouldClose: true,
        });
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
        openAction={() =>
          setActionsState({
            shouldStart: true,
          })
        }
        reopenAction={() =>
          setActionsState({
            shouldReopen: true,
          })
        }
      />
    </UserActionContainer>
  );
};
