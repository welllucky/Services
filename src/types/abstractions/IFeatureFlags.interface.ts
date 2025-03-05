import { FirebaseApp } from "firebase/app";
import {
  FetchStatus,
  RemoteConfigSettings,
  Value,
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

export interface IFeatureFlags {
  // eslint-disable-next-line no-unused-vars
  get: (key: string, returnType?: ReturnKeyType) => ReturnType | null | undefined;
  getAll: () => Partial<FeatureFlagsOptions>;
  // eslint-disable-next-line no-unused-vars
  setFallbacks: (fallback: FeatureFlagsOptions) => void;
  lookup: () => Promise<void>;
}

export interface IFeatureFlagsAbstract {
  // eslint-disable-next-line no-unused-vars
  get: (key: string, returnType?: ReturnKeyType) => ReturnType | null;
  getAll: () => Record<string, Value>;
  // eslint-disable-next-line no-unused-vars
  setFallbacks: (fallback: FeatureFlagsOptions) => void;
  lookup: () => Promise<void>;
}
