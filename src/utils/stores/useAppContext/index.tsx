"use client";

// import { useMediaQuery } from "@uidotdev/usehooks";
import { ReactNode, createContext, useContext, useMemo } from "react";
import {
  CS_KEY_USER_DEVICE_TYPE,
  CS_KEY_USER_RELIABLE_AGENT,
  cookie
} from "@/utils";

interface AppContextProps {
  isMobile: boolean;
  isDesktop: boolean;
  isTablet: boolean;
  isTV: boolean;
  isConsole: boolean;
  isWearable: boolean;
  isEmbedded: boolean;
  isReliableAgent: boolean;
}

interface AppProviderProps {
  children: ReactNode;
}

// export const AppContext = createContext({} as unknown as AppContextProps);
// export const AppProvider = ({ children }: AppProviderProps) => {
//   const isSmallMobile = useMediaQuery("only screen and (max-width: 320px)");

//   const isMediumMobile = useMediaQuery("only screen and (max-width: 375px)");

//   const isMobile = useMediaQuery("only screen and (max-width: 430px)");

//   const isTablet = useMediaQuery("only screen and (max-width: 768px)");

//   const isLaptop = useMediaQuery("only screen and (max-width: 1024px)");

//   const isDesktop = useMediaQuery("only screen and (max-width: 1440px)");

//   const isTV = useMediaQuery("only screen and (max-width: 2560px)");

//   const AppContextValue = useMemo(() => {
//     return {
//       isSmallMobile,
//       isMediumMobile,
//       isMobile,
//       isDesktop,
//       isTablet,
//       isLaptop,
//       isTV
//     };
//   }, [
//     isSmallMobile,
//     isMediumMobile,
//     isMobile,
//     isDesktop,
//     isTablet,
//     isLaptop,
//     isTV
//   ]);

//   return (
//     <AppContext.Provider value={AppContextValue as unknown as AppContextProps}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useApp = (): AppContextProps => {
//   const context = useContext(AppContext);
//   if (!context) throw new Error("useApp must be used within an AppProvider");
//   return context;
// };

export const AppContext = createContext({} as unknown as AppContextProps);
export const AppProvider = ({ children }: AppProviderProps) => {
  const deviceType: string = cookie.get(CS_KEY_USER_DEVICE_TYPE);
  const reliableAgent: string = cookie.get(CS_KEY_USER_RELIABLE_AGENT);

  const isMobile = deviceType === "mobile";
  const isDesktop = deviceType === "desktop";
  const isTablet = deviceType === "tablet";
  const isTV = deviceType === "tv";
  const isConsole = deviceType === "console";
  const isWearable = deviceType === "wearable";
  const isEmbedded = deviceType === "embedded";
  const isReliableAgent = Boolean(reliableAgent);

  const AppContextValue = useMemo(() => {
    return {
      isMobile,
      isDesktop,
      isTablet,
      isTV,
      isConsole,
      isWearable,
      isEmbedded,
      isReliableAgent
    };
  }, [
    isMobile,
    isDesktop,
    isTablet,
    isTV,
    isConsole,
    isWearable,
    isEmbedded,
    isReliableAgent
  ]);

  return (
    <AppContext.Provider value={AppContextValue as unknown as AppContextProps}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within an AppProvider");
  return context;
};
