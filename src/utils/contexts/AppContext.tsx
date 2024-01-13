import { ReactNode, createContext, useContext, useMemo } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

interface AppContextProps {
  isSmallMobile: boolean;
  isMediumMobile: boolean;
  isMobile: boolean;
  isDesktop: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isTV: boolean;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as unknown as AppContextProps);

export const AppProvider = ({ children }: AppProviderProps) => {
  const isSmallMobile = useMediaQuery("only screen and (max-width: 320px)");
  const isMediumMobile = useMediaQuery("only screen and (max-width: 375px)");
  const isMobile = useMediaQuery("only screen and (max-width: 430px) ");
  const isTablet = useMediaQuery("only screen and (max-width: 768px)");
  const isLaptop = useMediaQuery("only screen and (max-width: 1024px)");
  const isDesktop = useMediaQuery("only screen and (max-width: 1440px)");
  const isTV = useMediaQuery("only screen and (max-width: 2560px)");

  const AppContextValue = useMemo(() => {
    if (window !== undefined) {
      return {
        isSmallMobile,
        isMediumMobile,
        isMobile,
        isDesktop,
        isTablet,
        isLaptop,
        isTV
      };
    }
  }, [
    isSmallMobile,
    isMediumMobile,
    isMobile,
    isDesktop,
    isTablet,
    isLaptop,
    isTV
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
