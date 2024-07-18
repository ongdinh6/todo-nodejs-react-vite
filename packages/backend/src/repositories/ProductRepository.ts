class ProductRepository {
  constructor() {
  }

  static async getProducts() {
    return ["product001", "product002"];
  }
}

export default ProductRepository;
