import { Sequelize } from "sequelize-typescript";
import Environment from "utils/environment";

class DatabaseConnection {
  sequelize: Sequelize;

  constructor(database: string, server: string, port: string, username: string, password: string) {
    this.sequelize = new Sequelize({
      database: database,
      dialect: "mssql",
      username: username,
      password: password,
      host: server,
      port: Number(port),
      models: [__dirname + "/models"],
    });
  }
}

const runtimeEnv = Environment.getInstance();
const dbConnection = new DatabaseConnection(
  runtimeEnv.get("DB_DATABASE"),
  runtimeEnv.get("DB_SERVER"),
  runtimeEnv.get("DB_PORT"),
  runtimeEnv.get("DB_USERNAME"),
  runtimeEnv.get("DB_PASSWORD"),
).sequelize;

export default dbConnection;
