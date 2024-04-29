import { Request, Response } from "express";

class TodoController {
  static getListTodo(_req: Request, res: Response) {
    res.json([
      { id: "todo1", name: "Setup project" },
      { id: "todo2", name: "Verify build, start project" },
    ]);
  }
}

export default TodoController;
