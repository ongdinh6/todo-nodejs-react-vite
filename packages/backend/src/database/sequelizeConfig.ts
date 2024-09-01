import { Sequelize } from "sequelize";

import EnvConfig from "utils/envConfig";

const envConfig = EnvConfig.getInstance();

const sequelize = new Sequelize({
  dialect: "mssql",
  database: envConfig.get("DB_NAME"),
  username: envConfig.get("DB_USERNAME"),
  password: envConfig.get("DB_PASS"),
  host: envConfig.get("DB_SERVER"),
  port: Number(envConfig.get("DB_PORT", "1433")),
  dialectOptions: {
    options: {
      encrypt: false, // If you're using Azure, otherwise false
      trustServerCertificate: true, // Change to false for production
    },
  },
  logging: true,
  define: {
    // Because the Sequelize automatically pluralizes the model name and uses that as the table name
    // Using this config to stop the auto-pluralization
    freezeTableName: true,
    schema: "todo",
  },
});

export default sequelize;
