import * as crypto from "crypto";

export class CryptoAbstraction {
  private readonly agent: typeof crypto = crypto;

  private secret: Buffer;

  private iv: Buffer;

  constructor(secret: Buffer, iv: Buffer) {
    this.secret = secret;
    this.iv = iv;
  }

  public async cryptoData<T>(data: string | T) {
    const cipher = this.agent.createCipheriv(
      "aes-256-cbc",
      this.secret,
      this.iv,
    );
    const jsonString = JSON.stringify(data);
    let encrypted = cipher.update(jsonString, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
  }

  public async decryptData<T>(encryptData: string) {
    const decipher = this.agent.createDecipheriv(
      "aes-256-cbc",
      this.secret,
      this.iv,
    );
    let decrypted = decipher.update(encryptData, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return JSON.parse(decrypted) as T;
  }
}
