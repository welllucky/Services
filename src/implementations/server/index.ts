import { SentryAbstract } from "../client/abstractions/AppMonitoring/Sentry";
import { AppMonitoringClient } from "../client/infra/AppMonitoringClient";
import { JWT } from "./abstractions";
import {
  // CryptoAgent,
  JWTClient,
} from "./infra";

export const serverJwt = new JWTClient(process.env.AUTH_SECRET ?? "", JWT);
// export const cryptoAgent = new CryptoAgent(
//   process.env.ENCRYPT_KEY,
//   process.env.IV_KEY,
// );
export const appMonitoringServer = new AppMonitoringClient(
  new SentryAbstract(),
);
