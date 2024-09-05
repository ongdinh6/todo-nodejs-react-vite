import { HttpError } from "errors/httpError";
import { HttpStatus } from "errors/types";

export class InternalServerError extends HttpError {
  constructor(message: string) {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR, "Internal Server Error");
  }
}
