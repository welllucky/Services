import { Sequelize } from "sequelize";
import { SequelizeOptions } from "sequelize-typescript";
import { options } from "./config/config.mjs";

const dbOptions = <SequelizeOptions>options;

// eslint-disable-next-line @typescript-eslint/no-require-imports
dbOptions.dialectModule = require("sqlite3");

const sequelize = new Sequelize(dbOptions);

const initORM = async () => {
  await sequelize.sync({ alter: true });
};

initORM();

export default sequelize;
