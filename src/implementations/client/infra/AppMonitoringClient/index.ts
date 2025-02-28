import {
  BreadcrumbMonitoringObject,
  MessageMonitoringLevel,
  OptionalDataMonitoring,
  UserMonitoringObject,
} from "@/types";
import { IAppMonitoringClient } from "../../../interfaces";

export class AppMonitoringClient implements IAppMonitoringClient {
  private readonly client: IAppMonitoringClient;

  constructor(client: IAppMonitoringClient) {
    this.client = client;
  }

  public captureMessage(message: string, level: MessageMonitoringLevel) {
    this.client.captureMessage(message, level);
  }

  public captureException(
    error: unknown,
    optionalData?: OptionalDataMonitoring,
  ) {
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
