import { FirebaseApp } from "firebase/app";
import {
  FetchStatus,
  RemoteConfigSettings,
} from "firebase/remote-config";
import { FeatureFlagsOptions } from "../interfaces";

export type ReturnType = string | boolean | number | object;

export type ReturnKeyType = "string" | "number" | "boolean" | "object";

export interface RemoteConfigApp {
  app: FirebaseApp;
  settings: RemoteConfigSettings;
  defaultConfig: {
    [key: string]: string | number | boolean;
  };
  fetchTimeMillis: number;
  lastFetchStatus: FetchStatus;
}

export interface IFeatureFlag {
  // eslint-disable-next-line no-unused-vars
  get: (
    // eslint-disable-next-line no-unused-vars
    key: string,
    // eslint-disable-next-line no-unused-vars
    returnType?: ReturnKeyType,
  ) => ReturnType | null | undefined;
  getAll: () => Partial<FeatureFlagsOptions>;
  // eslint-disable-next-line no-unused-vars
  setFallbacks: (fallback: FeatureFlagsOptions) => void;
  lookup: () => Promise<void>;
  // eslint-disable-next-line no-unused-vars
  initialize: (defaultValues?: FeatureFlagsOptions) => Promise<boolean>;
  close: () => Promise<boolean>;
  isInitialized?: boolean;
}
