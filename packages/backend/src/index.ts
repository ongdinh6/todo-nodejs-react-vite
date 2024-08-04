import "./aliasSetup";

import express from "express";
import path from "path";

import EnvConfig from "utils/envConfig";
import apiRoutes from "routes/apiRoutes";
import FeatureToggleService from "services/featureToggleService";

const envConfig = EnvConfig.getInstance();

const port = Number(envConfig.get("SERVER_PORT", "8081"));
const app = express();

app.use("/api", apiRoutes);

if (envConfig.get("NODE_ENV") === "production") {
  // Middleware serve static file
  app.use(express.static(path.join(__dirname, "../public")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
}

FeatureToggleService.syncUpDatabase().catch((e) => console.error(e));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
