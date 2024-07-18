import { Sequelize } from "sequelize";

class SequelizeConfiguration {
  sequelize: Sequelize;

  constructor() {
    this.sequelize = new Sequelize(

    );
  }
}

export default new SequelizeConfiguration().sequelize;
