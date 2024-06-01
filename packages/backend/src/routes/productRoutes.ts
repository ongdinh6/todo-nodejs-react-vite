import { Request, Response, Router } from "express";
import { PaginationQuery } from "models/queries";
import ProductController from "controllers/productController";

const router = Router();

router.get("", async (req: Request, res: Response) => {
  const { query } = req.query;

  const paginationQuery: PaginationQuery = buildQueryFromParams(req.query);
  const products = await ProductController.getProductList(paginationQuery);
  res.json(products);
});

const buildQueryFromParams = (query: any): PaginationQuery => {
  return {
    q: "",
    page: 1,
    filters: [],
  };
};
