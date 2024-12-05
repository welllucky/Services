/* eslint-disable no-console */
import { addBreadcrumb, captureException } from "@sentry/nextjs";
import "reflect-metadata";
import { DataSource } from "typeorm";
import {
  Address,
  ColorScheme,
  Enterprise,
  Event,
  IssueCategory,
  Session,
  Subsidiary,
  Ticket,
  User,
} from "../server/entities";
import { options } from "./config/config";

const sqliteDataSource = new DataSource({
  type: "sqlite",
  database: options.storage,
  migrationsTableName: "migrations",
  entities: [
    Event,
    Ticket,
    User,
    Session,
    Address,
    ColorScheme,
    Enterprise,
    IssueCategory,
    Subsidiary,
  ],
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
  // synchronize: process.env.NODE_ENV !== "production",
  synchronize: false,
  ...(process.env.DB_CA && {
    ssl: {
      ca: process.env.DB_CA,
    },
  }),
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
      addBreadcrumb({
        category: "database",
        level: "log",
        message: "Data Source has been initialized!",
        data: {
          database: options.database,
          dialect: options.dialect,
          host: options.host,
          port: options.port,
          userName: options.username,
          storage: options.storage,
        },
      });
      console.log("Data Source has been initialized!");
    }
    return AppDataSource;
  } catch (err) {
    addBreadcrumb({
      category: "database",
      level: "error",
      message: "Error during Data Source initialization",
      data: {
        database: options.database,
        dialect: options.dialect,
        host: options.host,
        port: options.port,
        userName: options.username,
        storage: options.storage,
      },
    });
    captureException(err, {
      tags: {
        module: "database",
        method: "startDBConnection",
      },
    });
    console.error("Error during Data Source initialization", err);
  }
};

export default AppDataSource;
export { startDBConnection };
