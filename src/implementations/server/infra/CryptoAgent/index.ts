import { ICrypto } from "@/implementations/interfaces";
import { CryptoAbstraction } from "../../abstractions";

export class CryptoAgent implements ICrypto {
  private readonly agent: CryptoAbstraction;

  constructor(secret?: string, iv?: string) {
    if (!secret || !iv) throw new Error("Secret and IV are required to initialize CryptoAgent");

    this.agent = new CryptoAbstraction(
      Buffer.from(secret, "hex"),
      Buffer.from(iv, "hex"),
    );
  }

  decrypt<T>(data: string) {
    return this.agent.decryptData<T | string>(data);
  }

  encrypt<T>(data: string | T) {
    return this.agent.cryptoData<T>(data);
  }
}
