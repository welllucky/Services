/* eslint-disable brace-style */
import {
  fetchAndActivate,
  getAll,
  getRemoteConfig,
  getValue,
  // isSupported,
  RemoteConfig as RemoteConfigApp,
  RemoteConfigOptions,
  Value,
} from "firebase/remote-config";

import {
  FeatureFlagsOptions,
  FirebaseFeatures,
  IFeatureFlagsAbstract,
  ReturnKeyType,
  ReturnType,
} from "@/types";

import { FirebaseAbstract } from "../Firebase";

class FirebaseRemoteConfig
  extends FirebaseFeatures<RemoteConfigApp>
  implements IFeatureFlagsAbstract
{
  // eslint-disable-next-line no-useless-constructor
  constructor(firebaseInstance: FirebaseAbstract) {
    // if (!firebaseInstance) {
    //   throw new Error("Firebase instance is not provided");
    // }

    super(firebaseInstance);
  }

  async initialize<T>() {
    const canInitialize = true;
    // const canInitialize = await isSupported();
    await this.initializeFeature<RemoteConfigOptions>(
      "Remote Config",
      getRemoteConfig,
      canInitialize,
    );

    if (this.instance) {
      this.isInitialized = true;
      this.instance.settings.minimumFetchIntervalMillis =
        process.env.HOST_ENV === "production"
          ? 8 * 60 * 60 * 1000
          : 1 * 60 * 1000;
      this.instance.settings.fetchTimeoutMillis =
        process.env.NODE_ENV === "production" ? 10 * 60 * 1000 : 1 * 60 * 1000;
    }

    return this.instance as T;
  }

  get(key: string, returnType: ReturnKeyType = "boolean"): ReturnType | null {
    // if (!this.instance || !this.isInitialized) {
    //   throw new Error("RemoteConfig instance is not initialized");
    // }

    if (this.instance) {
      if (returnType === "string") {
        return getValue(this.instance, key).asString();
      }

      if (returnType === "boolean") {
        return getValue(this.instance, key).asBoolean();
      }

      if (returnType === "number") {
        return getValue(this.instance, key).asNumber();
      }

      if (returnType === "object") {
        return JSON.parse(getValue(this.instance, key).asString());
      }
    }

    return null;
  }

  getAll(): Record<string, Value> {
    if (!this.instance || !this.isInitialized) {
      throw new Error("RemoteConfig instance is not initialized");
    }

    return getAll(this.instance);
  }

  setFallbacks(fallbacks: FeatureFlagsOptions): void {
    if (!this.instance || !this.isInitialized) {
      throw new Error("RemoteConfig instance is not initialized");
    }
    this.instance.defaultConfig = fallbacks as Record<string, string>;
  }

  async lookup() {
    if (!this.instance || !this.isInitialized) {
      throw new Error("RemoteConfig instance is not initialized");
    }

    await fetchAndActivate(this.instance);
  }
}

export default FirebaseRemoteConfig;
