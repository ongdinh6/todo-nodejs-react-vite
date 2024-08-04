import { Request, Response } from "express";

const routersURI: string[] = ["/bye"];

export const errorHandler = (error: Error, req: Request, res: Response) => {
  if (!routersURI.includes(req.url) || !req.url.startsWith("/api")) {
    return res.status(404).json(new Error("Page Not Found!"));
  }

  return res.status(500);
};
