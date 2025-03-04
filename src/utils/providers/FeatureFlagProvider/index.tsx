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
  featureFlagAgent,
}: {
  children: ReactNode;
  firebaseAgent: IFirebase;
  featureFlagAgent: IFeatureFlags;
}) => {
  const [flags, setFlags] = useState<FeatureFlagsOptions>(
    {} as FeatureFlagsOptions,
  );

  useEffect(() => {
    const initializeFlags = async () => {
      const config = await getConfigs();

      const defaultFeatureFlags = config?.featureFlags || {};

      featureFlagAgent.setFallbacks(defaultFeatureFlags);
      await featureFlagAgent.lookup();
      setFlags(featureFlagAgent.getAll() ?? defaultFeatureFlags);
    };
    if (featureFlagAgent && firebaseAgent) {
      initializeFlags();
    }
  }, [featureFlagAgent, firebaseAgent]);

  const getFlag = useCallback(
    (flagName: string, returnType: ReturnKeyType = "boolean"): ReturnType => {
      return featureFlagAgent.get(flagName, returnType);
    },
    [featureFlagAgent],
  );

  const refresh = useCallback(async () => {
    await featureFlagAgent.lookup();
  }, [featureFlagAgent]);

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
