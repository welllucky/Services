import SentryAbstract from "../client/abstractions/AppMonitoring/Sentry";
import AppMonitoring from "../client/infra/AppMonitoringClient";
import { JWTAbstraction } from "./abstractions";
import { CryptoAgent, JWTClient } from "./infra";

export const jwt = new JWTClient(
  process.env.AUTH_SECRET ?? "",
  new JWTAbstraction(),
);
export const cryptoAgent = new CryptoAgent(
  process.env.ENCRYPT_KEY,
  process.env.IV_KEY,
);
export const appMonitoringServer = new AppMonitoring(new SentryAbstract());
