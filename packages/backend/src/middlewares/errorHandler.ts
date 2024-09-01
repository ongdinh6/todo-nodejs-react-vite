import { NextFunction, Request, Response } from "express";
import { HttpError } from "errors/httpError";
import { HttpStatus } from "errors/types";
import { InternalServerError } from "errors/internalServerError";

const clientURI: string[] = ["/bye"];

export const errorHandler = (error: Error, req: Request, res: Response, _next: NextFunction) => {
  if (clientURI.includes(req.url) || !req.url.startsWith("/api")) {
    return res.redirect("/error");
  }
  if (error instanceof HttpError) {
    return res.status(error.status).json(error.toPlainObject(req.path));
  }

  return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(new InternalServerError(error.message));
};
