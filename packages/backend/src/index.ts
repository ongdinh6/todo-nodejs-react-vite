import express from "express";
import path from "path";
import cors from "cors";
import todoRoutes from "./controllers/todoController";

const app = express();
const port = 8080;

const staticDir = path.join(__dirname, "public");

app.use(express.static(staticDir));

// middlewares
app.use(cors());

app.use("/api/todos", todoRoutes);

app.get("/api/hello", (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.send("Hello world!");
  }
  res.send(`Hello ${name}`);
});

const isLocal = true; // replaced by env
if (isLocal) {
  app.get("/*", (req, res) => {
    res.sendFile(staticDir + "/index.html");
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
