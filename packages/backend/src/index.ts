import "./aliasSetup";

import express from "express";
import path from "path";

import envConfig, { EnvConfig } from "utils/envConfig";
import apiRoutes from "routes/apiRoutes";
import FeatureToggleService from "services/featureToggleService";

const port = Number(envConfig.get(EnvConfig.SERVER_PORT, "8081"));
const app = express();

// Middleware serve static file
app.use(express.static(path.join(__dirname, "../../../dist/packages/backend/public")));

app.use("/api", apiRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../dist/packages/backend/public/index.html"));
});

FeatureToggleService.syncUpDatabase().catch((e) => console.error(e));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
