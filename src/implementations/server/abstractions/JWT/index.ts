import { IJWT } from "@/types";
import * as jwt from "jsonwebtoken";

class JWTAbstraction implements IJWT {
  private secret = "";

  private readonly agent = jwt;

  public decode<T>(token: string) {
    return this.agent.decode(token) as unknown as T;
  }

  public sign(payload: string | object | Buffer, expiresIn: string) {
    return this.agent.sign(payload, this.secret, {
      algorithm: "ES256",
      expiresIn: Number(expiresIn),
    });
  }

  public verify<T>(token: string) {
    return this.agent.verify(token, this.secret) as unknown as T;
  }

  setSecret(secret: string) {
    this.secret = secret;
  }
}

export default JWTAbstraction;
