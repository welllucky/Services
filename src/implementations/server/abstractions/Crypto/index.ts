// skipcq: JS-C1003
import * as crypto from "crypto";

export class CryptoAbstraction {
  private readonly agent = crypto;

  private readonly secret: Buffer;

  private readonly iv: Buffer;

  private readonly algorithm = "aes-256-cbc";

  constructor(secret: Buffer, iv: Buffer) {
    this.secret = secret;
    this.iv = iv;
  }

  public cryptoData<T>(data: string | T) {
    const cipher = this.agent.createCipheriv(
      this.algorithm,
      this.secret,
      this.iv,
    );
    const jsonString = JSON.stringify(data);
    let encrypted = cipher.update(jsonString, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
  }

  public decryptData<T>(encryptData: string) {
    const decipher = this.agent.createDecipheriv(
      this.algorithm,
      this.secret,
      this.iv,
    );
    let decrypted = decipher.update(encryptData, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return JSON.parse(decrypted) as T;
  }
}
