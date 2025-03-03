import {
  BreadcrumbMonitoringObject,
  MessageMonitoringLevel,
  OptionalDataMonitoring,
  UserMonitoringObject,
} from "@/types";
import { IAppMonitoring } from "../../../../types/abstractions";

export class AppMonitoring implements IAppMonitoring {
  private readonly client: IAppMonitoring;

  constructor(client: IAppMonitoring) {
    this.client = client;
  }

  public captureMessage(message: string, level: MessageMonitoringLevel) {
    this.client.captureMessage(message, level);
  }

  public captureException(
    error: unknown,
    optionalData?: OptionalDataMonitoring,
  ) {
    // eslint-disable-next-line no-console
    console.error("Error captured: ", error);
    this.client.captureException(error, optionalData);
  }

  addBreadcrumb(breadcrumb: BreadcrumbMonitoringObject) {
    this.client.addBreadcrumb(breadcrumb);
  }

  captureEvent(event: Record<string, unknown>) {
    this.client.captureEvent(event);
  }

  setUser(user: UserMonitoringObject | null) {
    this.client.setUser(user);
  }

  setTag(key: string, value: string) {
    this.client.setTag(key, value);
  }

  setExtra(key: string, extra: Record<string, unknown>) {
    this.client.setExtra(key, extra);
  }

  setFingerprint(fingerprint: string[]) {
    this.client.setFingerprint(fingerprint);
  }

  clearContext() {
    this.client.clearContext();
  }

  getContext() {
    return this.client.getContext();
  }
}
