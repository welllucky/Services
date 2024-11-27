import { JWTAbstraction } from "@/implementations/server/infra";
import { IJWT } from "@/implementations/server/interfaces";

export class JWTClient implements IJWT {
  private readonly client: JWTAbstraction;

  constructor(secret: string, client: JWTAbstraction) {
    this.client = client;
    this.client.setSecret(secret);
  }

  public async decode<T>(token: string): Promise<T> {
    return this.client.decode<T>(token);
  }

  public async sign(payload: string | object | Buffer, expiresIn: string) {
    return this.client.sign(payload, expiresIn);
  }

  public async verify<T>(token: string): Promise<T> {
    return this.client.verify<T>(token);
  }
}
