import "module-alias/register";
import express from "express";
import path from "path";
import cors from "cors";
import Environment from "@utils/environment";

const app = express();

const env = Environment.getInstance();
const port = env.getEnv("PORT", "8080");

const staticDir = path.join(__dirname, "public");

app.use(express.static(staticDir));

// middlewares
app.use(cors());

app.get("/api/hello", (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.send("Hello world!");
  }
  res.send(`Hello ${name}`);
});

const isLocal = true; // replaced by env
if (isLocal) {
  app.get("/*", (_req, res) => {
    res.sendFile(staticDir + "/index.html");
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
