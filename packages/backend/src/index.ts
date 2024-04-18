import express from "express";
import path from "path";
import cors from "cors";

const app = express();
const port = 8080;

const staticDir = path.join(__dirname, "../../frontend/dist");

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
if (!isLocal) {
  app.get("/*", (req, res) => {
    res.sendFile(staticDir + "/index.html");
  });
} else {
  app.get("/", (req, res) => {
    res.redirect("/");
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
