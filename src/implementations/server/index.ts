import SentryAbstract from "../client/abstractions/AppMonitoring/Sentry";
import AppMonitoring from "../client/infra/AppMonitoringClient";
import { HttpAbstraction, JWTAbstraction } from "./abstractions";
import { CryptoAgent, HttpAgent, JWTClient } from "./infra";

export const jwt = new JWTClient(
  process.env.AUTH_SECRET ?? "",
  new JWTAbstraction(),
);
export const cryptoAgent = new CryptoAgent(
  process.env.ENCRYPT_KEY,
  process.env.IV_KEY,
);
export const appMonitoringServer = new AppMonitoring(new SentryAbstract());
export const http = new HttpAgent(new HttpAbstraction(), appMonitoringServer);
