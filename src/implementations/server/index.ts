import { CryptoAgent, JWTClient } from "./abstractions";
import { JWT } from "./infra";

export const serverJwt = new JWTClient(process.env.AUTH_SECRET ?? "", JWT);
export const cryptoAgent = new CryptoAgent(
  process.env.ENCRYPT_KEY,
  process.env.IV_KEY,
);
