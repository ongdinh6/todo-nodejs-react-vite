import { SearchRequestParameter } from "models/requests/searchRequestParameter";
import { PaginatedResult } from "models/responses/paginatedResult";
import { DEFAULT_PAGE, Product } from "models/productTypes";
import { ProductRepository } from "repositories/productRepository";
import { ProductRequest } from "models/requests/productRequest";
import { ProductModel } from "database/models/product";
import { NotFoundError } from "errors/notFoundError";

export class ProductService {
  static readonly getProducts = async (searchParameter?: SearchRequestParameter | null): Promise<PaginatedResult<Product>> => {
    const productModels = await ProductRepository.getProducts(searchParameter);
    const products = productModels.map(product => product.toResponse());
    return new PaginatedResult<Product>(products, searchParameter?.page ?? DEFAULT_PAGE);
  }

  static readonly createNewProduct = async (payload: ProductRequest): Promise<Product> => {
    const productModel = ProductModel.build({
      name: payload.name,
      price: payload.price,
      description: payload.description,
    });
    const savedProduct = await ProductRepository.createOrUpdate(productModel.toJSON());
    return savedProduct.toResponse();
  }

  static readonly updateProduct = async (id: string, payload: ProductRequest): Promise<Product> => {
    const productModel = await ProductRepository.getOneById(id);
    if (!productModel) {
      throw new NotFoundError(`The product [${id}] was not found!`);
    }
    const updatedModel = productModel.updatedForm(payload);
    const updatedProduct = await ProductRepository.createOrUpdate(updatedModel.toJSON());
    return updatedProduct.toResponse();
  }
}