/* eslint-disable no-unused-vars */
type DataBaseOptions =
  | "mysql"
  | "postgres"
  | "sqlite"
  | "mariadb"
  | "mssql"
  | "db2"
  | "snowflake"
  | "oracle";

type Options = {
  dataBase: DataBaseOptions;
  host: string;
  password?: string;
  port?: number;
  storage?: string;
};

export interface IORM {
  connect({ dataBase, host, password, port, storage }: Options): void;
  disconnect(): void;
  // create(): void;
  // read(): void;
  // update(): void;
  // delete(): void;
}
