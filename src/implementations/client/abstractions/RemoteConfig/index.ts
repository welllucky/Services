import { FeatureFlagsOptions, ReturnKeyType } from "@/types";
import { FirebaseApp } from "firebase/app";
import {
  fetchAndActivate,
  FetchStatus,
  getAll,
  getRemoteConfig,
  getValue,
  RemoteConfigSettings,
  Value,
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

export class RemoteConfig {
  private readonly remoteConfigInstance: RemoteConfigApp | null = null;

  constructor(firebaseInstance: FirebaseAgent) {
    try {
      const firebaseApp = firebaseInstance.getFirebaseApp();

      if (!firebaseApp) {
        console.error("Firebase app is not initialized or is not provided");
        return;
      }

      this.remoteConfigInstance = getRemoteConfig(firebaseApp);

      if (this.remoteConfigInstance) {
        this.remoteConfigInstance.settings.minimumFetchIntervalMillis =
          process.env.HOST_ENV === "production"
            ? 8 * 60 * 60 * 1000
            : 1 * 60 * 1000;
        this.remoteConfigInstance.settings.fetchTimeoutMillis =
          process.env.NODE_ENV === "production" ? 10 * 60 * 1000 : 1 * 60 * 1000;
      }
    } catch (error) {
      console.error("Failed to initialize RemoteConfig:", error);
    }
  }

  get(key: string, returnType: ReturnKeyType = "boolean") {
    try {
      if (!this.remoteConfigInstance) {
        console.error("RemoteConfig instance is not initialized");
        return null;
      }

      if (returnType === "string") {
        return getValue(this.remoteConfigInstance, key).asString();
      }

      if (returnType === "boolean") {
        return getValue(this.remoteConfigInstance, key).asBoolean();
      }

      if (returnType === "number") {
        return getValue(this.remoteConfigInstance, key).asNumber();
      }

      if (returnType === "object") {
        return JSON.parse(getValue(this.remoteConfigInstance, key).asString());
      }

      return null;
    } catch (error) {
      console.error(`Error getting value for key ${key}:`, error);
      return null;
    }
  }

  getAll(): Record<string, Value> {
    try {
      if (!this.remoteConfigInstance) {
        console.error("RemoteConfig instance is not initialized");
        return {} as Record<string, Value>;
      }
      return getAll(this.remoteConfigInstance);
    } catch (error) {
      console.error("Error getting values: ", error);
      return {} as Record<string, Value>;
    }
  }

  setFallbacks(fallbacks: FeatureFlagsOptions): void {
    try {
      if (!this.remoteConfigInstance) {
        console.error("RemoteConfig instance is not initialized");
        return;
      }
      this.remoteConfigInstance.defaultConfig = fallbacks as Record<
        string,
        string
      >;
    } catch (error) {
      console.error("Error setting fallbacks:", error);
    }
  }

  async lookup() {
    try {
      if (!this.remoteConfigInstance) {
        console.error("RemoteConfig instance is not initialized");
        return;
      }

      await fetchAndActivate(this.remoteConfigInstance);
    } catch (error) {
      console.error("Error setting fallbacks:", error);
    }
  }
}
