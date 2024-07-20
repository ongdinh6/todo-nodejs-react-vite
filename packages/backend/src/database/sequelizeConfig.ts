import { Sequelize } from "sequelize";

import envConfig, { EnvConfig } from "utils/envConfig";

const sequelize = new Sequelize(envConfig.get(EnvConfig.DB_CONNECTION_STRING));

export default sequelize;
