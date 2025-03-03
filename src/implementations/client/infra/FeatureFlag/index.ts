import { FeatureFlagsOptions, IAppMonitoring, IFeatureFlags } from "@/types";

export class FeatureFlagAgent implements IFeatureFlags {
  private readonly agent: IFeatureFlags;

  private readonly appMonitoring: IAppMonitoring;

  constructor(featureFlagAgent: IFeatureFlags, appMonitoring: IAppMonitoring) {
    this.appMonitoring = appMonitoring;
    this.agent = featureFlagAgent;
  }

  get<T>(key: string) {
    try {
      return this.agent.get<T>(key);
    } catch (error) {
      console.error({ error });
      this?.appMonitoring.captureException(error);
      return null;
    }
  }

  getAll() {
    try {
      return this.agent.getAll();
    } catch (error) {
      console.error({ error });
      this?.appMonitoring.captureException(error);
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
}
