import "./aliasSetup";

import express from "express";

import envConfig, { EnvConfig } from "utils/envConfig";

const app = express();

const port = Number(envConfig.get(EnvConfig.SERVER_PORT, "8081"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

console.log("read: ", envConfig.get(EnvConfig.DB_CONNECTION_STRING))

export default app;
