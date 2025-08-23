/* eslint-disable no-unused-vars */
import { Scope } from "@sentry/nextjs";
import {
  BreadcrumbMonitoringObject,
  MessageMonitoringLevel,
  MonitoringScopeType,
  OptionalDataMonitoring,
  UserMonitoringObject,
} from "../interfaces";

export interface IAppMonitoring {
  captureMessage: (message: string, level: MessageMonitoringLevel) => void;
  captureException: (
    error: unknown,
    optionalData?: OptionalDataMonitoring,
  ) => void;
  addBreadcrumb: (breadcrumb: BreadcrumbMonitoringObject) => void;
  captureEvent: (event: Record<string, unknown>) => void;
  setUser: (user: UserMonitoringObject | null) => void;
  setTag: (key: string, value: string) => void;
  setExtra: (key: string, extra: Record<string, unknown>) => void;
  setFingerprint: (fingerprint: string[], type?: MonitoringScopeType) => void;
  clearContext: (type?: MonitoringScopeType) => void;
  getContext: (type?: MonitoringScopeType) => Scope;
}

export type IAppMonitoringAbstract = IAppMonitoring;
