/* eslint-disable max-len */
import { ITicket } from "@/types";
import { createTicketStore, TicketStore } from "@/utils/stores";
import React, { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

interface TicketProviderProps {
  children: React.ReactNode;
  data: ITicket;
}

const TicketContext = createContext<TicketStore | null>(null);

const TicketProvider = ({ children, data }: Readonly<TicketProviderProps>) => {
  if (!TicketContext) {
    throw new Error("useTicket must be used within a TicketProvider");
  }

  const storeRef = useRef<TicketStore | undefined>(undefined);
  if (!storeRef.current) {
    storeRef.current = createTicketStore(data);
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
  return useStore(dataContext);
};

export { TicketProvider, useTicket };
