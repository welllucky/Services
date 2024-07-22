/* eslint-disable no-console */
import { Sequelize } from "sequelize";

export class SequelizeAbstraction {
  client: Sequelize | undefined;

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
  }

  public async connect() {
    try {
      if (this.client) {
        this.client = new Sequelize({
          port: this.port,
          storage: this.storage,
          username: this.username,
          host: this.host,
          password: this.password,
          database: this.dataBase,
          retry: {
            max: 3,
            timeout: 5000,
            report(message, obj) {
              console.log(
                `Trying to connect to the database - ${obj.$current}/3`,
              );
              console.error(message);
            },
          },
        });

        await this.client.authenticate();
        console.log("Connection has been established successfully.");
      } else {
        console.warn("Unable to connect to the database: client is undefined");
      }
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  public async disconnect() {
    try {
      if (this.client) {
        await this.client.close();
      }
    } catch (error) {
      console.error("Unable to disconnect from the database:", error);
    }
  }
}
