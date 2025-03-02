export type MessageMonitoringLevel =
  | "info"
  | "debug"
  | "log"
  | "warning"
  | "error"
  | "fatal";

export type BreadcrumbMonitoringObject = {
  message: string;
  category?: string;
  level?: MessageMonitoringLevel;
  data?: Record<string, unknown>;
};

export type OptionalDataMonitoring = {
  event_id?: string;
  data?: unknown;
  tags?: Record<string, string | number | boolean | object>;
};

export type UserMonitoringObject = {
  id?: string;
  username?: string;
  email?: string;
  ip_address?: string;
};

export type MonitoringScopeType = "local" | "global" | "isolated";
