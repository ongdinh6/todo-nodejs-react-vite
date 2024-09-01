import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "database/sequelizeConfig";
import { Product } from "models/productTypes";
import { ProductRequest } from "models/requests/productRequest";

export class ProductModel extends Model<InferAttributes<ProductModel>,InferCreationAttributes<ProductModel>> {
  declare id: CreationOptional<string>;
  declare name: string;
  declare price: number;
  declare description: CreationOptional<string>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  toResponse = (): Product => {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      createdAt: this.createdAt?.toISOString(),
      updatedAt: this.updatedAt?.toISOString(),
    }
  }

  updatedForm = (req: ProductRequest): ProductModel => {
    return ProductModel.build({
      id: this.id,
      name: req.name ?? this.name,
      description: req.description ?? this.description,
      price: req.price ?? this.price,
      createdAt: this.createdAt,
    });
  }
}

ProductModel.init({
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.BIGINT,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
  }
}, {
  sequelize,
  tableName: "product",
  modelName: "Product",
});
