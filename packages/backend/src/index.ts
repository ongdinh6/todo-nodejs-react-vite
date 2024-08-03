import "./aliasSetup";

import express from "express";

import envConfig, { EnvConfig } from "utils/envConfig";
import apiRoutes from "routes/apiRoutes";
import FeatureToggleService from "services/featureToggleService";

const app = express();

app.use("/api", apiRoutes);

FeatureToggleService.syncUpDatabase().catch(e => console.error(e));

const port = Number(envConfig.get(EnvConfig.SERVER_PORT, "8081"));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
