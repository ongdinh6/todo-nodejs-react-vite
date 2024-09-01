import { HttpError } from "errors/httpError";
import { HttpStatus } from "errors/types";

export class ServiceUnavailable extends HttpError {
  constructor(message: string) {
    super(message, HttpStatus.SERVICE_UNAVAILABLE, "Service Unavailable");
  }
}