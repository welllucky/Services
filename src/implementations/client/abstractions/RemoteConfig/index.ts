import { FeatureFlagsOptions, IFeatureFlags } from "@/types";
import { FirebaseApp } from "firebase/app";
import {
  FetchStatus,
  getAll,
  getRemoteConfig,
  getValue,
  RemoteConfigSettings,
} from "firebase/remote-config";
import { FirebaseAgent } from "../../infra";

interface RemoteConfigApp {
  app: FirebaseApp;
  settings: RemoteConfigSettings;
  defaultConfig: {
    [key: string]: string | number | boolean;
  };
  fetchTimeMillis: number;
  lastFetchStatus: FetchStatus;
}

export class RemoteConfig implements IFeatureFlags {
  private readonly agent: RemoteConfigApp;

  constructor(firebaseAgent: FirebaseAgent) {
    const firebaseApp = firebaseAgent.getFirebaseApp();

    this.agent = getRemoteConfig(firebaseApp || undefined);
    this.agent.settings.minimumFetchIntervalMillis =
      process.env.NODE_ENV === "production"
        ? 8 * 60 * 60 * 1000
        : 1 * 60 * 1000;
    this.agent.settings.fetchTimeoutMillis = 1 * 60 * 1000;
  }

  get<T>(key: string): T {
    return getValue(this.agent, key) as T;
  }

  getAll(): Record<string, string | number | boolean | object> {
    return getAll(this.agent);
  }

  setFallbacks(fallbacks: FeatureFlagsOptions): void {
    this.agent.defaultConfig = fallbacks as Record<string, string>;
  }
}
