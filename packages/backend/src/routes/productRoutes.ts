import { NextFunction, Request, Response, Router } from "express";
import { SearchRequestParameter } from "models/requests/searchRequestParameter";
import { PaginatedResult } from "models/responses/paginatedResult";
import { Product } from "models/productTypes";
import { ProductService } from "services/productService";
import { ProductRequest } from "models/requests/productRequest";
import { DeleteItemStatus } from "models/responses/deleteItemStatus";

const router = Router();

router.get(
  "",
  async (
    req: Request<null, PaginatedResult<Product>, null, SearchRequestParameter | null | undefined>,
    res: Response,
  ) => {
    const params = req.query;
    const result = await ProductService.getProducts(params);
    res.json(result);
  },
);

router.post("/new", async (req: Request<null, Product, ProductRequest, null>, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const result = await ProductService.createNewProduct(payload);
    res.json(result);
  } catch (e) {
    next(e);
  }
});

router.put(
  "/edit/:id",
  async (req: Request<{ id: string }, Product, ProductRequest, null>, res: Response, next: NextFunction) => {
    try {
      const payload = req.body;
      const { id } = req.params;
      const result = await ProductService.updateProduct(id, payload);
      res.json(result);
    } catch (e) {
      next(e);
    }
  },
);

router.delete(
  "/delete/:id",
  async (req: Request<{ id: string }, DeleteItemStatus, null, null>, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await ProductService.deleteProduct(id);
      res.json(result);
    } catch (e) {
      next(e);
    }
  },
);

router.get(
  "/detail/:id",
  async (req: Request<{ id: string }, DeleteItemStatus, null, null>, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await ProductService.getProduct(id);
      res.json(result);
    } catch (e) {
      next(e);
    }
  },
);

export default router;
