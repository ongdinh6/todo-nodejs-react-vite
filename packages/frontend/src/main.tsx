import React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material";
import { withLDProvider } from "launchdarkly-react-client-sdk";

import AppRoutes from "App.tsx";
import { EnvConfig } from "envConfig.ts";

import "./App.css";
import ErrorBoundary from "ErrorBoundary.tsx";
import { SnackbarProvider } from "stores/contexts.tsx";

const App = () => {
  return (
    // <ErrorBoundary fallback={"Something went wrong!!!"}>
      <SnackbarProvider>
        <AppRoutes />
      </SnackbarProvider>
    // </ErrorBoundary>
  );
};

const TIMEOUT_IN_SECONDS = 2;

const LDProvider = withLDProvider({
  clientSideID: EnvConfig.get("VITE_LD_CLIENT_SIDE_ID"),
  timeout: TIMEOUT_IN_SECONDS
})(App);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StyledEngineProvider injectFirst>
    <LDProvider />
  </StyledEngineProvider>,
);

