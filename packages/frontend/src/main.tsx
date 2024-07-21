import React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

import AppRoutes from "App.tsx";
import envConfig, { EnvConfig } from "envConfig.ts";

import "./App.css";

const renderApp = async () => {
  console.log("VITE_LD_CLIENT_SIDE: ", envConfig.get(EnvConfig.VITE_LD_CLIENT_SIDE));
  const LDProvider = await asyncWithLDProvider({
    clientSideID: envConfig.get(EnvConfig.VITE_LD_CLIENT_SIDE),
    timeout: 5000
  });

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <StyledEngineProvider injectFirst>
      <LDProvider>
        <AppRoutes />
      </LDProvider>
    </StyledEngineProvider>,
  );
};

renderApp().catch((error) => console.error("App Error: ", error));
