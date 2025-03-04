import {
  FeatureFlagsOptions,
  IAppMonitoring,
  IFeatureFlags,
  ReturnKeyType,
} from "@/types";
import { RemoteConfig } from "../../abstractions";

export class FeatureFlagAgent implements IFeatureFlags {
  private readonly agent: RemoteConfig;

  private readonly appMonitoring: IAppMonitoring;

  constructor(featureFlagAgent: RemoteConfig, appMonitoring: IAppMonitoring) {
    this.appMonitoring = appMonitoring;
    this.agent = featureFlagAgent;
  }

  get(key: string, returnType: ReturnKeyType = "boolean") {
    try {
      return this.agent.get(key, returnType);
    } catch (error) {
      console.error({ error });
      this?.appMonitoring.captureException(error);
      return null;
    }
  }

  getAll(): Partial<FeatureFlagsOptions> {
    try {
      const rawValues = this.agent.getAll();

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
      console.error({ error });
      this?.appMonitoring?.captureException?.(error);
      return {} as FeatureFlagsOptions;
    }
  }

  setFallbacks(fallbacks: FeatureFlagsOptions) {
    try {
      this.agent.setFallbacks(fallbacks);
    } catch (error) {
      this?.appMonitoring.captureException(error);
    }
  }

  async lookup() {
    try {
      await this.agent.lookup();
    } catch (error) {
      this?.appMonitoring.captureException(error);
    }
  }
}
