/* eslint-disable no-param-reassign */
import { TicketDto } from "@/types";
import { ticketApi } from "@/utils/apis";
import toast from "react-hot-toast";
import { createStore } from "zustand";
import { immer } from "zustand/middleware/immer";

interface TicketProps extends TicketDto {}

interface TicketState extends TicketProps {
  initialize: () => void;
  block: () => void;
  reOpen: () => void;
  close: () => void;
  // eslint-disable-next-line no-unused-vars
  update: (data: Partial<TicketProps>) => void;
}

/**
 * Creates and initializes a ticket store with optional initial properties.
 // eslint-disable-next-line
 * @param {Partial<TicketProps>} initProps - Optional initial properties to merge with default ticket properties.
 // eslint-disable-next-line
 * @returns {TicketStore} An instance of the TicketStore, initialized with provided initial properties or defaults.
 */
const createTicketStore = (initProps?: Partial<TicketProps>) => {
  const DEFAULT_PROPS: TicketProps = {
    description: "",
    id: "0",
    priority: "low",
    resume: "",
    status: "notStarted",
    type: "problem",
    historic: [],
    closedBy: null,
    createdBy: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    closedAt: null,
    updatedBy: 0,
    // sector: "",
    // unity: "",
    date: "",
  };
  return createStore<TicketState>()(
    immer((set) => ({
      ...DEFAULT_PROPS,
      ...initProps,
      initialize: () =>
        set((state) => {
          state.status = "inProgress";
          state.updatedAt = new Date();
          state.historic?.push({
            id: `${state.historic.length + 1}`,
            description: "O chamado foi aberto",
            date: new Date(),
            order: state.historic.length + 1,
            icon: "🚀",
            type: "message",
            emitterId: "",
            createdBy: "",
            title: "",
            visibility: "public",
          });
        }),
      block: () =>
        set((state) => {
          state.status = "blocked";
          state.updatedAt = new Date();
          state.historic?.push({
            id: `${state.historic.length + 1}`,
            description: "O chamado foi bloqueado",
            date: new Date(),
            order: state.historic.length + 1,
            icon: "🚫",
            type: "message",
            emitterId: "",
            createdBy: "",
            title: "",
            visibility: "public",
          });
        }),
      reOpen: () =>
        set((state) => {
          state.status = "inProgress";
          state.updatedAt = new Date();
          state.historic?.push({
            id: `${state.historic.length + 1}`,
            description: "O chamado foi reaberto",
            date: new Date(),
            order: state.historic.length + 1,
            icon: "🔄",
            type: "reopen",
            emitterId: "",
            createdBy: "",
            title: "",
            visibility: "public",
          });
        }),
      close: () => {
        set((state) => {
          const { data, error } = ticketApi.closeTicket(state.id);
          if (error) {
            toast.error(
              "Erro ao fechar o chamado, tente novamente mais tarde!",
            );
            return;
          }

          if (data) {
            toast.success(
              "Chamado fechado com sucesso! Você pode visualizá-lo na tela de chamados meus chamados.",
            );

            state.status = "closed";
            state.updatedAt = new Date();
            state.historic?.push({
              id: `${state.historic.length + 1}`,
              description: "O chamado foi fechado",
              date: new Date(),
              order: state.historic.length + 1,
              icon: "🔒",
              type: "close",
              emitterId: "",
              createdBy: "",
              title: "",
              visibility: "public",
            });
          }
        });
      },
      update: (data) =>
        set((state) => {
          state.updatedAt = new Date();
          state.historic?.push({
            id: `${state.historic.length + 1}`,
            description: "O chamado foi atualizado",
            date: new Date(),
            order: state.historic.length + 1,
            icon: "🔄",
            type: "message",
            emitterId: "",
            createdBy: "",
            title: "",
            visibility: "public",
          });
          Object.assign(state, data);
        }),
    })),
  );
};

type TicketStore = ReturnType<typeof createTicketStore>;

export { createTicketStore, type TicketStore };
