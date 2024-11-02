/* eslint-disable no-console */
import { Event, Session, Ticket, User } from "@/server/models";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { options } from "./config/config";

console.log({ options });

const sqliteDataSource = new DataSource({
  type: "sqlite",
  database: options.storage,
  migrationsTableName: "migrations",
  entities: [Event, Ticket, User, Session],
  synchronize: true,
  logging: "all",
});

const mySqlDataSource = new DataSource({
  type: "mysql",
  host: options.host,
  port: options.port,
  username: options.username,
  password: options.password,
  database: options.database,
  entities: [Event, Ticket, User, Session],
  synchronize: true,
  logging: options.logging,
});

const AppDataSource =
  process.env.HOST_ENV === "production" ||
  process.env.DB_DIALECT === "mysql" ||
  (process.env.HOST_ENV === "development" &&
    process.env.NODE_ENV === "production")
    ? mySqlDataSource
    : sqliteDataSource;

const connectDB = () =>
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });

export default AppDataSource;
export { connectDB };
