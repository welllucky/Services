"use client";

import { IssueDto } from "@/types";
import { createIssueStore, IssueStore } from "@/utils/stores";
import React, { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

interface IssueProviderProps {
  children: React.ReactNode;
  data?: IssueDto;
}

const IssueContext = createContext<IssueStore | null>(null);

const IssueProvider = ({ children, data }: Readonly<IssueProviderProps>) => {
  if (!IssueContext) {
    throw new Error("useIssue must be used within a IssueProvider");
  }

  const storeRef = useRef<IssueStore | undefined>(undefined);
  if (!storeRef.current) {
    storeRef.current = createIssueStore(data);
  }

  return (
    <IssueContext.Provider value={storeRef.current}>
      {children}
    </IssueContext.Provider>
  );
};

/**
 * Custom hook for accessing IssueContext. It ensures the context is not null and provides access to it.
 * @returns {object} The IssueContext object providing access to ticket data and actions.
 */
const useIssue = () => {
  const dataContext = useContext(IssueContext);
  if (!dataContext) {
    throw new Error("useIssue must be used within a IssueProvider");
  }
  return useStore(dataContext);
};

export { IssueProvider, useIssue };
