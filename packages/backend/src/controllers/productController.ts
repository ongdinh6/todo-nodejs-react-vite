import { PaginationQuery } from "models/queries";
import { Product } from "models/product";

class ProductController {
  static async getProductList(pagination: PaginationQuery): Promise<Product[]> {
    return [];
  }
}

export default ProductController;
