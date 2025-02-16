"use client";

import { TicketDto } from "@/types";
import { TicketStore, useTicketStore } from "@/utils/stores";
import React, { createContext, useContext } from "react";

interface TicketProviderProps {
  children: React.ReactNode;
  data?: TicketDto;
}

const TicketContext = createContext<TicketStore | null>(null);

const TicketProvider = ({
  children,
  // data
}: Readonly<TicketProviderProps>) => {
  const [ticket, setTicket] = useTicketStore((state) => [
    state.ticket,
    state.setTicket,
  ]);

  const storeRef = React.useRef<TicketStore>(null);
  if (!storeRef.current) {
    storeRef.current = { ticket, setTicket };
  }

  if (!TicketContext) {
    throw new Error("useTicket must be used within a TicketProvider");
  }

  return (
    <TicketContext.Provider value={storeRef.current}>
      {children}
    </TicketContext.Provider>
  );
};

/**
 * Custom hook for accessing TicketContext. It ensures the context is not null and provides access to it.
 * @returns {object} The TicketContext object providing access to ticket data and actions.
 */
const useTicket = () => {
  const dataContext = useContext(TicketContext);
  if (!dataContext) {
    throw new Error("useTicket must be used within a TicketProvider");
  }
  return { ...dataContext };
};

export { TicketProvider, useTicket };
