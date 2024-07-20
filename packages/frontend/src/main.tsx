import React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material";

import AppRoutes from "App.tsx";

import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StyledEngineProvider injectFirst>
    <AppRoutes />
  </StyledEngineProvider>,
);
