import { decode, sign, verify } from "jsonwebtoken";

export class JWTAbstraction {
  private secret = "";

  public async decode<T>(token: string) {
    return decode(token) as unknown as T;
  }

  public async sign(payload: string | object | Buffer, expiresIn: string) {
    return sign(payload, this.secret, {
      algorithm: "ES256",
      expiresIn,
    });
  }

  public async verify<T>(token: string) {
    return verify(token, this.secret) as unknown as T;
  }

  setSecret(secret: string) {
    this.secret = secret;
  }
}

export const JWT = new JWTAbstraction();
