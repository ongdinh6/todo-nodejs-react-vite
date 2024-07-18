import ProductRepository from "repositories/ProductRepository";

class ProductService {

  async getProducts() {
    return await ProductRepository.getProducts();
  }
}

export default ProductService;
