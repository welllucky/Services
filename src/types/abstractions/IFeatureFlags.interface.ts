export interface FeatureFlagsOptions {
  isTicketEventsAvailable?: boolean;
  isMaintenanceMode?: boolean;
}

export type ReturnType = string | boolean | number | object;

export type ReturnKeyType = "string" | "number" | "boolean" | "object";

export interface IFeatureFlags {
  // eslint-disable-next-line no-unused-vars
  get: (key: string, returnType?: ReturnKeyType) => ReturnType;
  getAll: () => Partial<FeatureFlagsOptions>;
  // eslint-disable-next-line no-unused-vars
  setFallbacks: (fallback: FeatureFlagsOptions) => void;
  lookup: () => Promise<void>;
}
