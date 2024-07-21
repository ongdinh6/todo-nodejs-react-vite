import { Sequelize } from "sequelize";

import envConfig, { EnvConfig } from "utils/envConfig";

const sequelize = new Sequelize({
  dialect: "mssql",
  database: envConfig.get(EnvConfig.DB_NAME),
  username: envConfig.get(EnvConfig.DB_USERNAME),
  password: envConfig.get(EnvConfig.DB_PASS),
  host: envConfig.get(EnvConfig.DB_SERVER),
  port: Number(envConfig.get(EnvConfig.DB_PORT, "1433")),
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
  },
});

export default sequelize;
