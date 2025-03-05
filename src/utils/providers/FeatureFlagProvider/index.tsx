import getConfigs from "@/server/functions/getConfigs";
import {
  FeatureFlagsOptions,
  IFeatureFlags,
  IFirebase,
  ReturnKeyType,
  ReturnType,
} from "@/types";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface FeatureFlagContextType {
  flags: FeatureFlagsOptions;
  // eslint-disable-next-line no-unused-vars
  getFlag: (flagName: string, returnType?: ReturnKeyType) => ReturnType;
}

const FeatureFlagContext = createContext<FeatureFlagContextType>({
  flags: {},
  getFlag: () => false,
});

export const useFeatureFlags = () => useContext(FeatureFlagContext);

export const FeatureFlagProvider = ({
  children,
  firebaseAgent,
  featureFlag,
}: {
  children: ReactNode;
  firebaseAgent: IFirebase;
  featureFlag: IFeatureFlags;
}) => {
  const [flags, setFlags] = useState<FeatureFlagsOptions>(
    {} as FeatureFlagsOptions,
  );

  useEffect(() => {
    const initializeFlags = async () => {
      const config = await getConfigs();

      const defaultFeatureFlags = config?.featureFlags || {};

      featureFlag.setFallbacks(defaultFeatureFlags);
      await featureFlag.lookup();
      setFlags(featureFlag.getAll() ?? defaultFeatureFlags);
    };
    if (featureFlag && firebaseAgent) {
      initializeFlags();
    }
  }, [featureFlag, firebaseAgent]);

  const getFlag = useCallback(
    (flagName: string, returnType: ReturnKeyType = "boolean"): ReturnType => {
      return featureFlag.get(flagName, returnType);
    },
    [featureFlag],
  );

  const refresh = useCallback(async () => {
    await featureFlag.lookup();
  }, [featureFlag]);

  const contextValue = useMemo(
    () => ({
      flags,
      getFlag,
      refresh,
    }),
    [flags, getFlag, refresh],
  );

  return (
    <FeatureFlagContext.Provider value={contextValue}>
      {children}
    </FeatureFlagContext.Provider>
  );
};
