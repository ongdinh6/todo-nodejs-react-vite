import { HttpStatus } from "errors/types";

export class HttpError extends Error {
  public message: string;
  public status: HttpStatus;
  public name: string;
  public timestamp: string;
  public path: string;

  constructor(message: string, status: HttpStatus, name: string) {
    super(message);
    this.name = name;
    this.status = status;
    this.message = message;
    this.timestamp = new Date().toISOString();
    this.path = "";
  }

  toPlainObject = (path: string) => {
    this.path = path;
    return {
      name: this.name,
      status: this.status,
      message: this.message,
      timestamp: this.timestamp,
      path: this.path,
    };
  };
}
