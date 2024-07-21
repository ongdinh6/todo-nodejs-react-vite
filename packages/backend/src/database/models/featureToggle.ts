import { DataTypes, Model } from "sequelize";

import sequelize from "database/sequelizeConfig";

class FeatureToggle extends Model {}

FeatureToggle.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    value: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "FeatureToggle",
    timestamps: false,
  },
);

export default FeatureToggle;
