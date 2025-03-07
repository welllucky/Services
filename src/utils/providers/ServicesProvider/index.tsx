"use client";

import { ConfigType, IAnalytics, IFeatureFlags, IFirebase } from "@/types";
import { Client, OpenFeatureProvider } from "@openfeature/react-sdk";
import {
  createContext,
  ReactNode,
  use,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { FeatureFlagProvider } from "../FeatureFlagProvider";

interface ServicesContextType {
  firebaseAgent: IFirebase | null;
  analytics: IAnalytics | null;
}

interface ServicesProviderProps {
  children: ReactNode;
  firebaseAgent: IFirebase;
  analytics: IAnalytics;
  openFeatureClient: Client;
  featureFlag: IFeatureFlags;
  appConfigs: ConfigType | null;
}

const ServicesContext = createContext<ServicesContextType>({
  firebaseAgent: null,
  analytics: null,
});

export const useServices = () => use(ServicesContext);

export const ServicesProvider = ({
  children,
  firebaseAgent,
  analytics,
  featureFlag,
  appConfigs,
  openFeatureClient,
}: ServicesProviderProps) => {
  const config = useMemo(() => appConfigs, [appConfigs]);

  const isFeatureActive = useCallback(
    (feature: string) => config?.application.features.includes(feature),
    [config],
  );

  const isFeatureFlagActive = useMemo(
    () => isFeatureActive("featureFlags"),
    [isFeatureActive],
  );
  const isAnalyticsActive = useMemo(
    () => isFeatureActive("analytics"),
    [isFeatureActive],
  );

  useEffect(() => {
    const initialize = async () => {
      const defaultFeatureFlags = config?.featureFlags || {};

      if (isFeatureFlagActive) await analytics.initialize();
      if (isAnalyticsActive) await featureFlag.initialize(defaultFeatureFlags);
    };

    initialize();
  }, [
    analytics,
    appConfigs,
    config?.featureFlags,
    featureFlag,
    isAnalyticsActive,
    isFeatureFlagActive,
  ]);

  const contextValue = useMemo(
    () => ({
      firebaseAgent,
      analytics,
    }),
    [firebaseAgent, analytics],
  );

  return (
    <ServicesContext.Provider value={contextValue}>
      <OpenFeatureProvider client={openFeatureClient}>
        <FeatureFlagProvider
          featureFlag={openFeatureClient}
          defaultFeatureFlags={config?.featureFlags}
          // isActive={isFeatureFlagActive}
        >
          {children}
        </FeatureFlagProvider>
      </OpenFeatureProvider>
    </ServicesContext.Provider>
  );
};
