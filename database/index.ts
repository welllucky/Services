import { Sequelize } from "sequelize";
import { SequelizeOptions } from "sequelize-typescript";
import { options } from "./config/config.mjs";

const dbOptions = <SequelizeOptions>options;

dbOptions.dialectModule = require("sqlite3");

const sequelize = new Sequelize(dbOptions);

export default sequelize;
