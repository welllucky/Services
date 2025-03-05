// eslint-disable-next-line import/no-unresolved
import { IAnalytics, IAnalyticsAbstract, IAppMonitoring } from "@/types";

class Analytics implements IAnalytics {
  private readonly client: IAnalyticsAbstract | null;

  private readonly appMonitoring: IAppMonitoring | null;

  constructor(
    analyticsAgent: IAnalyticsAbstract,
    appMonitoring: IAppMonitoring,
  ) {
    try {
      if (!analyticsAgent) {
        throw new Error("FeatureFlag instance was not initialized.");
      }

      if (!appMonitoring) {
        throw new Error("AppMonitoring instance was not initialized.");
      }

      this.appMonitoring = appMonitoring;
      this.client = analyticsAgent;
    } catch (error) {
      this.appMonitoring = null;
      this.client = null;
      // eslint-disable-next-line no-console
      console.error("Failed to initialize Analytics: ", { error });
    }
  }

  async initialize() {
    try {
      await this.client?.initialize();
    } catch (error) {
      this.appMonitoring?.captureException(error);
    }
  }
}

export default Analytics;
