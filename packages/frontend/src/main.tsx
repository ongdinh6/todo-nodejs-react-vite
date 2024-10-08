import React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material";
import { withLDProvider } from "launchdarkly-react-client-sdk";

import AppRoutes from "App.tsx";
import { EnvConfig } from "envConfig.ts";

import ErrorBoundary from "ErrorBoundary.tsx";
import { SnackbarProvider } from "contexts/contexts.tsx";
import InternalServerErrorPage from "pages/ErrorPage/InternalServerErrorPage";
import { Provider } from "react-redux";
import { store } from "store/store.ts";

import "./App.css";

const App = () => {
  return (
    <ErrorBoundary fallback={<InternalServerErrorPage />}>
      <SnackbarProvider>
        <AppRoutes />
      </SnackbarProvider>
    </ErrorBoundary>
  );
};

const TIMEOUT_IN_SECONDS = 2;

const LDProvider = withLDProvider({
  clientSideID: EnvConfig.get("VITE_LD_CLIENT_SIDE_ID"),
  timeout: TIMEOUT_IN_SECONDS,
})(App);

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <LDProvider />
    </Provider>
  </StyledEngineProvider>,
);
