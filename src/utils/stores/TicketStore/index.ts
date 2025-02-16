import { TicketDto } from "@/types";
// import toast from "react-hot-toast";
import { immer } from "zustand/middleware/immer";
import { createWithEqualityFn as create } from "zustand/traditional";

type State = {
  ticket: TicketDto;
};

interface Actions {
  // initialize: () => void;
  // block: () => void;
  // reOpen: () => void;
  // close: () => void;
  // update: (data: Partial<IssueProps>) => void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  setTicket: (ticket: TicketDto) => void;
}

const DEFAULT_PROPS: State = {
  ticket: {
    description: "",
    id: "",
    priority: "",
    resume: "",
    status: "",
    type: "",
    historic: [],
    closedBy: "",
    createdBy: "",
    createdAt: "",
    updatedAt: "",
    closedAt: "",
    updatedBy: "",
    // sector: "",
    // unity: "",
    date: "",
  },
};

/**
 * Creates and initializes a ticket store with optional initial properties.
 // eslint-disable-next-line
 * @param {Partial<IssueProps>} initProps - Optional initial properties to merge with default ticket properties.
 // eslint-disable-next-line
 * @returns {TicketStore} An instance of the TicketStore, initialized with provided initial properties or defaults.
 */
const useTicketStore = create<State & Actions>()(
  immer((set) => ({
    ...DEFAULT_PROPS,
    // initialize: () =>
    //   set((state) => {
    //     toast.success(
    //       "Chamado iniciado com sucesso! Caso tenha alguma dúvida, entre em contato com o solicitante.",
    //     );

    //     state.issue.status = "inProgress";
    //     state.issue.updatedAt = new Date();
    //     state.issue.historic?.push({
    //       id: `${state.issue.historic.length + 1}`,
    //       description: "O chamado foi aberto",
    //       date: new Date(),
    //       order: state.issue.historic.length + 1,
    //       icon: "🚀",
    //       type: "message",
    //       emitterId: "",
    //       createdBy: "",
    //       title: "",
    //       visibility: "public",
    //     });
    //   }),
    // block: () =>
    //   set((state) => {
    //     toast.success(
    //       "Chamado bloqueado com sucesso! As partes interessadas foram notificadas.",
    //     );

    //     state.issue.status = "blocked";
    //     state.issue.updatedAt = new Date();
    //     state.issue.historic?.push({
    //       id: `${state.issue.historic.length + 1}`,
    //       description: "O chamado foi bloqueado",
    //       date: new Date(),
    //       order: state.issue.historic.length + 1,
    //       icon: "🚫",
    //       type: "message",
    //       emitterId: "",
    //       createdBy: "",
    //       title: "",
    //       visibility: "public",
    //     });
    //   }),
    // reOpen: () => {
    //   set((state) => {
    //     toast.success(
    //       "Chamado reaberto com sucesso! As partes interessadas foram notificadas.",
    //     );

    //     state.issue.status = "inProgress";
    //     state.issue.updatedAt = new Date();
    //     state.issue.historic?.push({
    //       id: `${state.issue.historic.length + 1}`,
    //       description: "O chamado foi reaberto",
    //       date: new Date(),
    //       order: state.issue.historic.length + 1,
    //       icon: "🔄",
    //       type: "reopen",
    //       emitterId: "",
    //       createdBy: "",
    //       title: "",
    //       visibility: "public",
    //     });
    //   });
    // },
    // close: () => {
    //   set((state) => {
    //     toast.success(
    //       "Chamado fechado com sucesso! Você pode visualizá-lo na tela de chamados meus chamados.",
    //     );

    //     state.issue.status = "closed";
    //     state.issue.updatedAt = new Date();
    //     state.issue.historic?.push({
    //       id: `${state.issue.historic.length + 1}`,
    //       description: "O chamado foi fechado",
    //       date: new Date(),
    //       order: state.issue.historic.length + 1,
    //       icon: "🔒",
    //       type: "close",
    //       emitterId: "",
    //       createdBy: "",
    //       title: "",
    //       visibility: "public",
    //     });
    //   });
    // },
    // update: (data) =>
    //   set((state) => {
    //     state.issue.updatedAt = new Date();
    //     state.issue.historic?.push({
    //       id: `${state.issue.historic.length + 1}`,
    //       description: "O chamado foi atualizado",
    //       date: new Date(),
    //       order: state.issue.historic.length + 1,
    //       icon: "🔄",
    //       type: "message",
    //       emitterId: "",
    //       createdBy: "",
    //       title: "",
    //       visibility: "public",
    //     });
    //     Object.assign(state, data);
    //   }),
    setTicket(ticket: Partial<TicketDto>) {
      set((state) => {
        Object.assign(state, { ticket });
      });
    },
  })),
);

type TicketStore = ReturnType<typeof useTicketStore>;

export { useTicketStore, type TicketStore };
