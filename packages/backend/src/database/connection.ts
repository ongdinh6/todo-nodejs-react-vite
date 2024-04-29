import sequelize from "sequelize";
import { Sequelize } from "sequelize-typescript";

class Connection {
  database: string;
  server: string;
  port: number;
  username: string;
  password: string;
  option: object;

  constructor(database: string, server: string, port: number, username: string, password: string) {
    this.database = database;
    this.server = server;
    this.port = port;
    this.username = username;
    this.password = password;
  }

  connect(): Sequelize {
    return new Sequelize({
      database: this.database,
      dialect: "mssql",
      username: this.username,
      password: this.password,
      host: this.server,
      port: this.port,
      models: [__dirname + "/models"],
    });
  }
}

export default Connection;
