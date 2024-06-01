import "module-alias/register";
import express from "express";
import path from "path";
import cors from "cors";
import Environment from "utils/environment";
import { errorHandler } from "middlewares/errorHandler";

const app = express();
const env = Environment.getInstance();

// set static folder
const staticDir = path.join(__dirname, "public");
app.use(express.static(staticDir, { index: false }));

// middlewares
app.use(cors());
app.use(errorHandler);

app.get("/api/hello", (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.send("Hello world!");
  }
  res.send(`Hello ${name}`);
});

app.get("/bye", async (req, res, next) => {
  res.send("Good Bye. See you soon!");
});

const isLocal = env.get("LOCAL"); // replaced by env
if (!isLocal) {
  app.get("/*", (_req, res) => {
    res.sendFile(staticDir + "/index.html");
  });
}
// server index
const port = env.get("PORT", "8080");
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
