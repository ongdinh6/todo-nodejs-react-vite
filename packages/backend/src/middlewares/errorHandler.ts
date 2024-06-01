import { NextFunction, Request, Response } from "express";
import PageNotFound from "models/exceptions/pageNotFound";

const routersURI: string[] = ["/bye"];

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (!routersURI.includes(req.url) || !req.url.startsWith("/api")) {
    return res.status(404).json(new PageNotFound("Page Not Found!"));
  }

  return res.status(500);
};
