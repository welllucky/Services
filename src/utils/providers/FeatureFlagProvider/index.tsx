"use client";

import { FeatureFlagsOptions, ReturnKeyType, ReturnType } from "@/types";
import {
  Client,
  JsonValue,
  ReactFlagEvaluationOptions,
} from "@openfeature/react-sdk";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from "react";

interface FeatureFlagProviderProps {
  children: ReactNode;
  featureFlag: Client;
  defaultFeatureFlags?: FeatureFlagsOptions;
  // featureFlag: IFeatureFlags;
  // isActive?: boolean;
}

interface FeatureFlagContextType {
  getFlag: (
    // eslint-disable-next-line no-unused-vars
    flagName: keyof FeatureFlagsOptions,
    // eslint-disable-next-line no-unused-vars
    returnType?: ReturnKeyType,
  ) => ReturnType;
  // flags: FeatureFlagsOptions;
}

const FeatureFlagContext = createContext<FeatureFlagContextType>({
  getFlag: () => false,
  // flags: {},
});

export const useFlags = () => useContext(FeatureFlagContext);

const getFlagsOptions = {
  suspend: true,
  updateOnConfigurationChanged: true,
  updateOnContextChanged: true,
} as ReactFlagEvaluationOptions;

export const FeatureFlagProvider = ({
  children,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  featureFlag,
  defaultFeatureFlags = {} as FeatureFlagsOptions,
  // isActive,
}: FeatureFlagProviderProps) => {
  // const [flags, setFlags] = useState<FeatureFlagsOptions>(
  //   {} as FeatureFlagsOptions,
  // );

  // useEffect(() => {
  //   const getInitialFlags = async () => {
  //     setFlags(featureFlag.getAll() ?? defaultFeatureFlags);
  //   };

  //   if (isActive) {
  //     getInitialFlags();
  //   }
  // }, [defaultFeatureFlags, featureFlag, isActive]);

  // const getFlag = useCallback(
  //   (flagName: string, returnType: ReturnKeyType = "boolean"): ReturnType => {
  //     return featureFlag.get(flagName, returnType) ?? false;
  //   },
  //   [featureFlag],
  // );

  // const refresh = useCallback(async () => {
  //   await featureFlag.lookup();
  // }, [featureFlag]);

  // const contextValue = useMemo(
  //   () => ({
  //     flags,
  //     getFlag,
  //     refresh,
  //   }),
  //   [flags, getFlag, refresh],
  // );

  const defaultFlags = useMemo(
    () => defaultFeatureFlags as Record<string, ReturnType>,
    [defaultFeatureFlags],
  );

  const getFlag = useCallback(
    (
      flagName: keyof FeatureFlagsOptions,
      returnType: ReturnKeyType = "boolean",
    ): ReturnType => {
      if (returnType === "string") {
        return featureFlag.getStringValue(
          flagName as string,
          (defaultFlags[`${flagName}`] as string) || "",
          getFlagsOptions,
        );
      }

      if (returnType === "number") {
        return featureFlag.getNumberValue(
          flagName as string,
          (defaultFlags[`${flagName}`] as number) || 0,
          getFlagsOptions,
        );
      }

      if (returnType === "object") {
        return featureFlag.getObjectValue(
          flagName as string,
          (defaultFlags[`${flagName}`] as JsonValue) || ({} as JsonValue),
          getFlagsOptions,
        ) as object;
      }

      return featureFlag.getBooleanValue(
        flagName as string,
        (defaultFlags[`${flagName}`] as boolean) || false,
        getFlagsOptions,
      );
    },
    [defaultFlags, featureFlag],
  );

  const contextValue = useMemo(
    () => ({
      getFlag,
      // flags,
      // refresh,
    }),
    [getFlag],
  );

  return (
    <FeatureFlagContext.Provider value={contextValue}>
      {children}
    </FeatureFlagContext.Provider>
  );
};
