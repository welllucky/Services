"use client";

import { TicketDto } from "@/types";
import React, { createContext, useContext, useRef } from "react";
// import { useStore } from "zustand";

interface TicketProviderProps {
  children: React.ReactNode;
  data?: TicketDto;
}

const TicketContext = createContext<TicketDto | null>(null);

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const TicketProvider = ({ children, data }: Readonly<TicketProviderProps>) => {
  if (!TicketContext) {
    throw new Error("useTicket must be used within a TicketProvider");
  }

  const storeRef = useRef<TicketDto | undefined>(undefined);
  if (!storeRef.current) {
    // storeRef.current = createIssueStore(data);
  }
  /* value={storeRef.current} */
  return (
    <TicketContext.Provider value={null}>{children}</TicketContext.Provider>
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
  // return useStore(dataContext);
  return null;
};

export { TicketProvider, useTicket };
