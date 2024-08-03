import { DataTypes, Model } from "sequelize";
import { Spec } from "node-schedule";
import sequelize from "database/sequelizeConfig";

class Scheduler extends Model {
  declare type: string;
  declare cronTime: Spec;
  declare description: string;
  declare updatedDate: Date;
}

Scheduler.init({
  type: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  cronTime: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  updatedDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "scheduler",
  modelName: "Scheduler"
});

export default Scheduler;