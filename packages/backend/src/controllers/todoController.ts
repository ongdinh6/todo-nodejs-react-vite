import { Request, Response, Router } from "express";

class TodoController {
  router = Router();

  constructor() {
    this.initialize();
  }

  private initialize() {
    this.router.get("/", this.getListTodo);
  }

  getListTodo(_req: Request, res: Response) {
    res.json([
      { id: "todo1", name: "Setup project" },
      { id: "todo2", name: "Verify build, start project" },
    ]);
  }
}

export default new TodoController().router;
