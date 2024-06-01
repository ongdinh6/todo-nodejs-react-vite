import { Model, Table } from "sequelize-typescript";

@Table({
  tableName: "products"
})
class ProductEntity extends Model {
  declare id: string;
}

export default ProductEntity;
