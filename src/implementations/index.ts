import { Dialect, Sequelize } from "sequelize";

export const ormClient = new Sequelize(
  process.env.DB_NAME ?? "",
  process.env.DB_USER ?? "root",
  process.env.DB_PASSWORD ?? "root",
  {
    dialect: process.env.DB_DIALECT as Dialect ?? "mysql",
    port: Number(process.env.DB_PORT ?? 3306),
    storage: process.env.DB_STORAGE ?? "",
  },
  // process.env.DB_DIALECT ?? "mysql",
  // process.env.DB_HOST ?? "",
  // process.env.DB_USER ?? "root",
  // process.env.DB_PASS ?? "root",
  // Number(process.env.DB_PORT ?? 3306),
  // process.env.DB_STORAGE ?? "",
);
