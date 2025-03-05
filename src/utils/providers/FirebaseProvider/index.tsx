"use client";

import { IAnalytics, IFirebase } from "@/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from "react";

interface FirebaseContextType {
  firebaseAgent: IFirebase | null;
  analytics: IAnalytics | null;
}

interface FirebaseProviderProps {
  children: ReactNode;
  firebaseAgent: IFirebase;
  analytics: IAnalytics;
}

const FirebaseContext = createContext<FirebaseContextType>({
  firebaseAgent: null,
  analytics: null,
});

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({
  children,
  firebaseAgent,
  analytics,
}: FirebaseProviderProps) => {
  useEffect(() => {
    const initalize = async () => {
      await analytics.initialize();
    };

    initalize();
  }, [analytics]);

  const contextValue = useMemo(
    () => ({
      firebaseAgent,
      analytics,
    }),
    [firebaseAgent, analytics],
  );

  return (
    <FirebaseContext.Provider value={contextValue}>
      {children}
    </FirebaseContext.Provider>
  );
};
