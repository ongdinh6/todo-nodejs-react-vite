import { HttpError } from "errors/httpError";
import { HttpStatus } from "errors/types";

export class Unauthenticated extends HttpError {
  constructor(message: string) {
    super(message, HttpStatus.UNAUTHENTICATED, "Unauthenticated");
  }
}