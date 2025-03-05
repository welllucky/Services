import {
  FeatureFlagsOptions,
  IAppMonitoring,
  IFeatureFlags,
  IFeatureFlagsAbstract,
  ReturnKeyType,
} from "@/types";

class FeatureFlag implements IFeatureFlags {
  private readonly client: IFeatureFlagsAbstract | null;

  private readonly appMonitoring: IAppMonitoring | null;

  constructor(
    featureFlagAgent: IFeatureFlagsAbstract,
    appMonitoring: IAppMonitoring,
  ) {
    try {
      if (!featureFlagAgent) {
        throw new Error("FeatureFlag instance was not initialized.");
      }

      if (!appMonitoring) {
        throw new Error("AppMonitoring instance was not initialized.");
      }

      this.appMonitoring = appMonitoring;
      this.client = featureFlagAgent;
    } catch (error) {
      this.appMonitoring = null;
      this.client = null;
      // eslint-disable-next-line no-console
      console.error("Failed to initialize FeatureFlag: ", { error });
    }
  }

  get(key: string, returnType: ReturnKeyType = "boolean") {
    try {
      return this.client?.get(key, returnType);
    } catch (error) {
      this.appMonitoring?.captureException(error);
      return null;
    }
  }

  getAll(): Partial<FeatureFlagsOptions> {
    try {
      const rawValues = this.client?.getAll();

      if (!rawValues) {
       throw new Error("Flags are not returned from the client.");
      }

      return Object.entries(rawValues).reduce(
        (convertedValues, [key, value]) => {
          if (value.getSource() === "static") return convertedValues;

          const flagKey = key as keyof FeatureFlagsOptions;

          const rawValue = value.asString().trim();
          let parsedValue;

          if (rawValue === "true" || rawValue === "false") {
            parsedValue = value.asBoolean();
            // eslint-disable-next-line no-restricted-globals
          } else if (!isNaN(Number(rawValue)) && rawValue !== "") {
            parsedValue = value.asNumber();
          } else {
            try {
              parsedValue = JSON.parse(rawValue);
            } catch {
              parsedValue = rawValue;
            }
          }

          // eslint-disable-next-line no-param-reassign, security/detect-object-injection
          convertedValues[flagKey] = parsedValue;
          return convertedValues;
        },
        {} as Partial<FeatureFlagsOptions>,
      ) as FeatureFlagsOptions;
    } catch (error) {
      this.appMonitoring?.captureException(error);
      return {} as FeatureFlagsOptions;
    }
  }

  setFallbacks(fallbacks: FeatureFlagsOptions) {
    try {
      this.client?.setFallbacks(fallbacks);
    } catch (error) {
      this.appMonitoring?.captureException(error);
    }
  }

  async lookup() {
    try {
      await this.client?.lookup();
    } catch (error) {
      this.appMonitoring?.captureException(error);
    }
  }
}

export default FeatureFlag;
