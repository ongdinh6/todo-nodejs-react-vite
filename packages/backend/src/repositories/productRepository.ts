import { ProductModel } from "database/models/product";
import { SearchRequestParameter } from "models/requests/searchRequestParameter";
import { Op } from "sequelize";
import { DEFAULT_ITEM_PER_PAGE, DEFAULT_PAGE } from "models/productTypes";

export class ProductRepository {
  static readonly getProducts = async (searchParams?: SearchRequestParameter | null): Promise<ProductModel[]> => {
    console.log("getProducts: searchParams: ", searchParams);
    if (searchParams) {
      return await ProductModel.findAll({
        offset: ((searchParams.page ?? DEFAULT_PAGE) * DEFAULT_ITEM_PER_PAGE) - DEFAULT_ITEM_PER_PAGE,
        limit: DEFAULT_ITEM_PER_PAGE,
      });
    }
    return await ProductModel.findAll();
  }

  static readonly createOrUpdate = async (model: ProductModel) => {
    const [instance, created] = await ProductModel.upsert(model);
    if (created) {
      console.log(`Created a new product has id [${instance.id}]`);
    } else {
      console.log(`Updated the product with id [${model.id}]`);
    }
    return instance;
  }

  static readonly getOneById = async (id: string): Promise<ProductModel | null> => {
    return await ProductModel.findOne({
      where: {
        id,
      },
    });
  }
}