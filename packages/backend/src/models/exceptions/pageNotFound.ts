class PageNotFound extends Error {
  status: number;
  message: string;
  timestamp: string;
  stack?: string;

  constructor(message: string, stack?: string) {
    super();
    this.status = 404;
    this.message = message;
    this.stack = stack;
    this.timestamp = new Date().toLocaleDateString();
  }
}

export default PageNotFound;
