// import { ActionButton } from "@/components/ActionButton";
import { ReactNode } from "react";
import { UserActionContainer } from "./styles";

type UserList = "resolver" | "creator" | "viewer";

export interface TicketActionOptionsType {
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

export const TicketActionButton = () => {
  // const [actionsState, setActionsState] = useReducer(
  //   (state: ActionsStateType, newState: ActionsStateType) => ({
  //     ...state,
  //     ...newState,
  //   }),
  //   {
  //     shouldStart: false,
  //     shouldClose: false,
  //     shouldReopen: false,
  //   },
  // );

  // const { status, id, close, initialize, reOpen } = useTicket();
  // const {
  //   isLoading: isLoadingStart,
  //   data: dataStart,
  //   error: errorStart,
  // } = ticketApi.startTicket(id, actionsState.shouldStart);
  // const {
  //   isLoading: isLoadingClose,
  //   data: dataClose,
  //   error: errorClose,
  // } = ticketApi.closeTicket(id, actionsState.shouldClose);
  // const {
  //   isLoading: isLoadingReopen,
  //   data: dataReopen,
  //   error: errorReopen,
  // } = ticketApi.reopenTicket(id, actionsState.shouldReopen);

  // useEffect(() => {
  //   if (actionsState.shouldStart && !isLoadingStart) {
  //     setActionsState({
  //       shouldStart: false,
  //     });
  //     initialize();
  //   }

  //   if (errorStart) {
  //     toast.error("Erro ao iniciar chamado");
  //   }

  //   if (actionsState.shouldClose && !isLoadingClose) {
  //     setActionsState({
  //       shouldClose: false,
  //     });
  //     close();
  //   }

  //   if (errorClose) {
  //     toast.error("Erro ao finalizar chamado");
  //   }

  //   if (actionsState.shouldReopen && !isLoadingReopen) {
  //     toast.success("Chamado reaberto com sucesso!");
  //     setActionsState({
  //       shouldReopen: false,
  //     });
  //     reOpen();
  //   }

  //   if (errorReopen) {
  //     toast.error("Erro ao reabrir chamado");
  //   }
  // }, [
  //   actionsState.shouldClose,
  //   actionsState.shouldReopen,
  //   actionsState.shouldStart,
  //   close,
  //   dataClose,
  //   dataReopen,
  //   dataStart,
  //   errorClose,
  //   errorReopen,
  //   errorStart,
  //   initialize,
  //   isLoadingClose,
  //   isLoadingReopen,
  //   isLoadingStart,
  //   reOpen,
  // ]);

  // const TicketOptions = [
  //   {
  //     index: 1,
  //     icon: (
  //       <ChatCircleText
  //         color={theme.colors.primary.default}
  //         size={20}
  //       />
  //     ),
  //     title: "Comentar",
  //     userList: ["resolver", "creator"],
  //     isActive: true,
  //     action: () => {
  //       console.log("Comentar");
  //     },
  //   },
  //   {
  //     index: 2,
  //     icon: (
  //       <Check
  //         color={theme.colors.primary.default}
  //         size={20}
  //       />
  //     ),
  //     userList: ["resolver"],
  //     isActive: true,
  //     title: "Finalizar",
  //     action: () => {
  //       setActionsState({
  //         shouldClose: true,
  //       });
  //     },
  //   },
  // ] satisfies TicketActionOptionsType[];

  return (
    <UserActionContainer>
      {/* <ActionButton
        isOpen={status === "inProgress"}
        canReopen={status === "closed" || status === "blocked"}
        actionOptions={TicketOptions}
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
      /> */}
    </UserActionContainer>
  );
};
