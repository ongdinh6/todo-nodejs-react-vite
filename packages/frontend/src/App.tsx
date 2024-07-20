import React, { ReactElement } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import HomePage from "pages/HomePage";
import PageFooter from "components/PageFooter";
import PageHeader from "components/PageHeader";
import PageNotFound from "pages/ErrorPage/PageNotFound";
import ProductList from "pages/ProductList";
import { TimesProvider } from "stores/providers.tsx";
import { Stack } from "@mui/material";

import styles from "./Index.module.css";

const App = () => {
  return (
    <Stack direction={"column"} className={styles.main}>
      <header className={"flex-0"}>
        <PageHeader />
      </header>
      <main className={"flex-1"}>
        <TimesProvider>
          <Outlet />
        </TimesProvider>
      </main>
      <footer>
        <PageFooter />
      </footer>
    </Stack>
  );
};

const AppRoutes = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />}>
          <Route index element={<HomePage />} />
          <Route path={"list-products"} element={<ProductList />} />
        </Route>
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
