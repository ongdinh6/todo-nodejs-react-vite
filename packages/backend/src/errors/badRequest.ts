import { HttpError } from "errors/httpError";
import { HttpStatus } from "errors/types";

export class BadRequest extends HttpError {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST, "Bad Request");
  }
}
