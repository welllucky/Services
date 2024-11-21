/* eslint-disable no-console */
import fs from "fs";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Event, Session, Ticket, User } from "../server/entities";
import { options } from "./config/config";

// [`${path.resolve(__dirname, "../")}server/entities/*.ts`],

const sqliteDataSource = new DataSource({
  type: "sqlite",
  database: options.storage,
  migrationsTableName: "migrations",
  entities: [Event, Ticket, User, Session],
  synchronize: true,
});

const mySqlDataSource = new DataSource({
  type: "mysql",
  host: options.host,
  port: options.port,
  username: options.username,
  password: options.password,
  database: options.database,
  entities: [Event, Ticket, User, Session],
  synchronize: process.env.HOST_ENV !== "production",
  ssl: {
    ca: fs.readFileSync("src/database/config/isrgrootx1.pem").toString(),
  },
  logging: options.logging,
});

const AppDataSource =
  process.env.HOST_ENV === "production" ||
  process.env.DB_DIALECT === "mysql" ||
  (process.env.HOST_ENV === "development" &&
    process.env.NODE_ENV === "production")
    ? mySqlDataSource
    : sqliteDataSource;

// const AppDataSource = mySqlDataSource;

// eslint-disable-next-line consistent-return
const startDBConnection = async () => {
  "use server";

  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      console.log("Data Source has been initialized!");
    }
    return AppDataSource;
  } catch (err) {
    console.error("Error during Data Source initialization", err);
  }
};

export default AppDataSource;
export { startDBConnection };
