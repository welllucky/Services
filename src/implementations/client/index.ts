"use client";

import { Cookies } from "react-cookie";
import { HTTPClient, SentryAbstract } from "./abstractions";
import { AppMonitoringClient } from "./infra/AppMonitoringClient";

export const httpClient = new HTTPClient();
export const cookie = new Cookies();
export const appMonitoringClient = new AppMonitoringClient(
  new SentryAbstract(),
);
