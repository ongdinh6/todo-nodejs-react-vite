import "./aliasSetup";

import bodyParser from "body-parser";
import express from "express";
import path from "path";

import EnvConfig from "utils/envConfig";
import apiRoutes from "routes/apiRoutes";
import { errorHandler } from "middlewares/errorHandler";
import { logger } from "utils/logger";

const envConfig = EnvConfig.getInstance();

const port = Number(envConfig.get("SERVER_PORT", "8081"));
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api", apiRoutes);
app.use(errorHandler);

if (envConfig.get("NODE_ENV") === "production") {
  // Middleware serve static file
  app.use(express.static(path.join(__dirname, "../public")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
}

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});

export default app;
