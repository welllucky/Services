import { MonitoringScopeType } from "@/types";
import * as Sentry from "@sentry/nextjs";
import { IAppMonitoring } from "../../../../types/abstractions";

export class SentryAbstract implements IAppMonitoring {
  client = Sentry;

  captureException(error: unknown, hint?: Sentry.EventHint) {
    this.client.captureException(error, hint);
  }

  captureMessage(message: string, level?: Sentry.SeverityLevel) {
    this.client.captureMessage(message, level);
  }

  addBreadcrumb(breadcrumb: Sentry.Breadcrumb, hint?: Sentry.BreadcrumbHint) {
    this.client.addBreadcrumb(breadcrumb, hint);
  }

  captureEvent(event: Sentry.Event, hint?: Sentry.EventHint) {
    this.client.captureEvent(event, hint);
  }

  setUser(user: Sentry.User | null) {
    this.client.setUser(user);
  }

  setTag(key: string, value: string) {
    this.client.setTag(key, value);
  }

  setExtra(key: string, extra: Record<string, unknown>) {
    this.client.setExtra(key, extra);
  }

  clearContext(type: MonitoringScopeType = "local") {
    if (type === "global") {
      this.client.getGlobalScope()?.clear();
    }

    if (type === "isolated") {
      this.client.getIsolationScope()?.clear();
    }

    if (type === "local") {
      this.client.getCurrentScope()?.clear();
    }
  }

  getContext(type: MonitoringScopeType = "local") {
    if (type === "global") {
      return this.client.getGlobalScope();
    }

    if (type === "isolated") {
      return this.client.getIsolationScope();
    }

    return this.client.getCurrentScope();
  }

  setFingerprint(fingerprint: string[], type: MonitoringScopeType = "local") {
    if (type === "local") {
      this.client.getCurrentScope()?.setFingerprint(fingerprint);
    }

    if (type === "global") {
      this.client.getGlobalScope()?.setFingerprint(fingerprint);
    }

    if (type === "isolated") {
      this.client.getIsolationScope()?.setFingerprint(fingerprint);
    }
  }
}
