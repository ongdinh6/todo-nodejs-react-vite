import { Request, Response, NextFunction, Router } from "express";
import ProductService from "services/ProductService";

const router = Router();

const productService = new ProductService();

router.get("/", async (req: Request, res: Response, nextFn: NextFunction) => {
  try {
    const response = await productService.getProducts();
    res.json(response);
  } catch (e) {
    nextFn(e);
  }
});

export default router;
