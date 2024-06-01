import React, { ReactElement } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "App";
import ProductList from "pages/ProductList";
import NotFoundError from "pages/errors/NotFoundError";

const AppRoutes = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/product-list"} element={<ProductList />} />
        <Route path={"*"} element={<NotFoundError />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
);
