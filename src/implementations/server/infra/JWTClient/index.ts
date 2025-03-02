import { IJWT } from "@/types/abstractions";
import { JWTAbstraction } from "../../abstractions/JWT";

export class JWTClient implements IJWT {
  private readonly client: JWTAbstraction;

  constructor(secret: string, client: JWTAbstraction) {
    this.client = client;
    this.client.setSecret(secret);
  }

  public decode<T>(token: string): Promise<T> {
    return this.client.decode<T>(token);
  }

  public sign(payload: string | object | Buffer, expiresIn: string) {
    return this.client.sign(payload, expiresIn);
  }

  public verify<T>(token: string): Promise<T> {
    return this.client.verify<T>(token);
  }
}
