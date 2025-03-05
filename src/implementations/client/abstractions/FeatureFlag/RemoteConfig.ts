import {
  FeatureFlagsOptions,
  IFeatureFlagsAbstract,
  RemoteConfigApp,
  ReturnKeyType,
  ReturnType,
} from "@/types";
import {
  fetchAndActivate,
  getAll,
  getRemoteConfig,
  getValue,
  Value,
} from "firebase/remote-config";
import { FirebaseAbstract } from "../Firebase";

class RemoteConfig implements IFeatureFlagsAbstract {
  private readonly remoteConfigInstance: RemoteConfigApp | null = null;

  constructor(firebaseInstance: FirebaseAbstract) {
    try {
      const firebaseApp = firebaseInstance.getFirebaseApp();

      if (!firebaseApp) {
        throw new Error("Firebase app is not initialized or is not provided");
      }

      this.remoteConfigInstance = getRemoteConfig(firebaseApp);

      if (this.remoteConfigInstance) {
        this.remoteConfigInstance.settings.minimumFetchIntervalMillis =
          process.env.HOST_ENV === "production"
            ? 8 * 60 * 60 * 1000
            : 1 * 60 * 1000;
        this.remoteConfigInstance.settings.fetchTimeoutMillis =
          process.env.NODE_ENV === "production"
            ? 10 * 60 * 1000
            : 1 * 60 * 1000;
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Failed to initialize RemoteConfig:", error);
    }
  }

  get(key: string, returnType: ReturnKeyType = "boolean"): ReturnType | null {
    if (!this.remoteConfigInstance) {
      throw new Error("RemoteConfig instance is not initialized");
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
  }

  getAll(): Record<string, Value> {
    if (!this.remoteConfigInstance) {
      throw new Error("RemoteConfig instance is not initialized");
    }

    return getAll(this.remoteConfigInstance);
  }

  setFallbacks(fallbacks: FeatureFlagsOptions): void {
    if (!this.remoteConfigInstance) {
      throw new Error("RemoteConfig instance is not initialized");
    }
    this.remoteConfigInstance.defaultConfig = fallbacks as Record<
      string,
      string
    >;
  }

  async lookup() {
    if (!this.remoteConfigInstance) {
      throw new Error("RemoteConfig instance is not initialized");
    }

    await fetchAndActivate(this.remoteConfigInstance);
  }
}

export default RemoteConfig;
