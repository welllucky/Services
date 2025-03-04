"use client";

import { IFirebase } from "@/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from "react";

interface FirebaseContextType {
  firebaseAgent: IFirebase | null;
}

interface FirebaseProviderProps {
  children: ReactNode;
  firebaseAgent: IFirebase;
  // appMonitoring: AppMonitoring;
}

const FirebaseContext = createContext<FirebaseContextType>({
  firebaseAgent: null,

});

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({
  children,
  firebaseAgent,
}: FirebaseProviderProps) => {
  useEffect(() => {
    const initalize = async () => {
      await firebaseAgent.initializeAnalytics();
    };

    initalize();
  }, []);

  const contextValue = useMemo(
    () => ({
      firebaseAgent,
    }),
    [firebaseAgent],
  );

  return (
    <FirebaseContext.Provider value={contextValue}>
      {children}
    </FirebaseContext.Provider>
  );
};
