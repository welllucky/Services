import * as jwt from "jsonwebtoken";

export class JWTAbstraction {
  private readonly client = jwt;

  private secret: string = "";

  public async decode<T>(token: string) {
    return this.client.decode(token) as unknown as T;
  }

  public async sign(payload: string | object | Buffer, expiresIn: string) {
    return this.client.sign(payload, this.secret, {
      algorithm: "ES256",
      expiresIn,
    });
  }

  public async verify<T>(token: string) {
    return this.client.verify(token, this.secret) as unknown as T;
  }

  setSecret(secret: string) {
    this.secret = secret;
  }
}

export const JWT = new JWTAbstraction();
