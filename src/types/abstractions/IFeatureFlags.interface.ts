export interface FeatureFlagsOptions {
  isTicketEventsAvailable?: boolean;
  isMaintenanceMode?: boolean;
}

export interface IFeatureFlags {
  // eslint-disable-next-line no-unused-vars
  get: <T>(key: string) => T | null;
  getAll: () => FeatureFlagsOptions;
  // eslint-disable-next-line no-unused-vars
  setFallbacks: (fallback: FeatureFlagsOptions) => void;
}
