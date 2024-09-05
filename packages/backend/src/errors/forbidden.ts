import { HttpError } from "errors/httpError";
import { HttpStatus } from "errors/types";

export class Forbidden extends HttpError {
  constructor(message: string) {
    super(message, HttpStatus.FORBIDDEN, "Forbidden Error");
  }
}
