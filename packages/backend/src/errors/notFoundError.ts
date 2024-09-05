import { HttpError } from "errors/httpError";
import { HttpStatus } from "errors/types";

export class NotFoundError extends HttpError {
  constructor(message: string) {
    super(message, HttpStatus.NOT_FOUND, "Not Found");
  }
}
