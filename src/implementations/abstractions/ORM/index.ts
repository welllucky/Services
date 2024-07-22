/* eslint-disable no-console */
import { SequelizeAbstraction } from "@/implementations/infra";
import { IORM } from "@/implementations/interfaces";

export class ORM implements IORM {
  private client: SequelizeAbstraction;

  constructor(
    private dataBase: string,
    private host: string,
    private username: string,
    private password?: string,
    private port?: number,
    private storage?: string,
  ) {
    this.dataBase = dataBase;
    this.host = host;
    this.password = password;
    this.port = port;
    this.storage = storage;
    this.username = username;
    this.client = new SequelizeAbstraction(
      this.dataBase,
      this.host,
      this.username,
      this.password,
      this.port,
      this.storage,
    );
  }

  public async connect() {
    try {
      await this.client.connect();
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  public async disconnect() {
    try {
      await this.client.disconnect();
    } catch (error) {
      console.error("Unable to disconnect from the database:", error);
    }
  }

  // public async create() {}

  // public async read() {}

  // public async update() {}

  // public async delete() {}
}
