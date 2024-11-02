export const options = {
  ...(process.env.DB_USER && { username: process.env.DB_USER }),
  ...(process.env.DB_PASSWORD && { password: process.env.DB_PASSWORD }),
  ...(process.env.DB_NAME && { database: process.env.DB_NAME }),
  ...(process.env.DB_HOST && { host: process.env.DB_HOST }),
  ...(process.env.DB_PORT && { port: Number(process.env.DB_PORT) }),
  storage: process.env.DB_STORAGE ?? "services.sqlite",
  dialect: process.env.DB_DIALECT ?? "sqlite",
  logging: process.env.NODE_ENV === "development",
  migrationStorageTableName: "migrations",
};
