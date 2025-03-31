"use client";

import {
  CS_KEY_USER_DEVICE_TYPE,
  CS_KEY_USER_RELIABLE_AGENT,
} from "@/constraints";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createContext, ReactNode, use, useEffect, useMemo } from "react";
import { useMediaQuery } from "usehooks-ts";
// eslint-disable-next-line import/no-unresolved
import { cookie } from "@/implementations/client";
import { useFlags } from "../FeatureFlagProvider";

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

export const AppContext = createContext({} as unknown as AppContextProps);
  /**
   * @description
   * This component provides the AppContext to all the components
   * below it. It uses the useMediaQuery hook to detect the device type
   * and the useFlags hook to detect if the site is in maintenance mode.
   * It also handles the redirect to the maintenance or noMobileDevice page
   * based on the device type and the maintenance mode.
   * @param {ReactNode} children - The children components
   * @returns {JSX.Element} - The AppProvider component
   */
export const AppProvider = ({ children }: Readonly<AppProviderProps>) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { getFlag } = useFlags();
  const isMaintenanceMode = getFlag("isMaintenanceMode");
  const rdParam = searchParams.get("rd");

  const deviceType: string = cookie.get(CS_KEY_USER_DEVICE_TYPE) || "";
  const reliableAgent: string = cookie.get(CS_KEY_USER_RELIABLE_AGENT) || "";

  const isClientSmallMobile = useMediaQuery(
    "only screen and (max-width: 320px)",
  );

  const isClientMediumMobile = useMediaQuery(
    "only screen and (min-width: 321px) and (max-width: 375px)",
  );

  const isClientMobile = useMediaQuery(
    "only screen and (min-width: 376px) and (max-width: 430px)",
  );

  const isClientTablet = useMediaQuery(
    "only screen and (min-width: 431px) and (max-width: 768px)",
  );

  const isClientLaptop = useMediaQuery(
    "only screen and (min-width: 769px) and (max-width: 1024px)",
  );

  const isClientDesktop = useMediaQuery(
    "only screen and (min-width: 1025px) and (max-width: 1440px)",
  );

  const isClientTV = useMediaQuery("only screen and (min-width: 1441px)");

  const isMobile =
    isClientSmallMobile || isClientMediumMobile || isClientMobile; // deviceType === "mobile";

  const isDesktop = useMemo(
    () => isClientLaptop || isClientDesktop,
    [isClientDesktop, isClientLaptop],
  ); // deviceType === "desktop";
  const isTablet = useMemo(() => isClientTablet, [isClientTablet]); // deviceType === "tablet";
  const isTV = useMemo(() => isClientTV, [isClientTV]); // deviceType === "tv";
  const isConsole = useMemo(() => deviceType === "console", [deviceType]);
  const isWearable = useMemo(() => deviceType === "wearable", [deviceType]);
  const isEmbedded = useMemo(() => deviceType === "embedded", [deviceType]);
  const isReliableAgent = useMemo(
    () => Boolean(reliableAgent),
    [reliableAgent],
  );

  useEffect(() => {
    router.prefetch("/maintenance");
    router.prefetch("/noMobileDevice");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pathName !== "/maintenance" && isMaintenanceMode) {
      router.replace("/maintenance");
    }
  }, [isMaintenanceMode, isMobile, pathName, router]);

  useEffect(() => {
    const isNoMobilePage = pathName === "/noMobileDevice";
    const isRedirectFromServer = rdParam === "server";

    if (isRedirectFromServer) {
      return;
    }

    if (!isMobile && !isNoMobilePage) {
      router.replace("/noMobileDevice?rd=client");
      return;
    }

    if (isMobile && isNoMobilePage) {
      router.replace("/?rd=client");
    }
  }, [isMobile, pathName, rdParam, router, deviceType]);

  const AppContextValue = useMemo(
    () => ({
      isMobile,
      isSmallMobile: isClientSmallMobile,
      isMediumMobile: isClientMediumMobile,
      isLargeMobile: isClientMobile,
      isLaptop: isClientLaptop,
      isDesktop,
      isTablet,
      isTV,
      isConsole,
      isWearable,
      isEmbedded,
      isReliableAgent,
    }),
    [
      isMobile,
      isClientSmallMobile,
      isClientMediumMobile,
      isClientMobile,
      isClientLaptop,
      isDesktop,
      isTablet,
      isTV,
      isConsole,
      isWearable,
      isEmbedded,
      isReliableAgent,
    ],
  );

  return (
    <AppContext.Provider value={AppContextValue as unknown as AppContextProps}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextProps => {
  const context = use(AppContext);
  if (!context) throw new Error("useApp must be used within an AppProvider");
  return context;
};
