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
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "feature_toggle",
    modelName: "FeatureToggle",
    timestamps: false,
  },
);

export default FeatureToggle;
