import React, { ReactElement } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import styles from "./Index.module.css";
import reactLogo from "assets/react.svg";
import viteLogo from "/vite.svg";
import App from "App.tsx";
import { TimesProvider } from "stores/providers.tsx";
import ProductList from "pages/ProductList";
import NotFoundError from "pages/errors/NotFoundError";

const AppRoutes = (): ReactElement => {
  return (
    <BrowserRouter>
      <div className={styles.main}>
        <header className={"flex fixed"}>
          <div>
            <a href="/product-list" target="_blank">
              <img src={viteLogo} className={styles.logo} alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
            </a>
          </div>
          <Link to={"product-list"}>Products</Link>
        </header>
        <main>
          <Routes>
            <Route path={"/"} element={<App />} />
            <Route
              path={"product-list"}
              element={
                <TimesProvider>
                  <ProductList />
                </TimesProvider>
              }
            />
            <Route path={"*"} element={<NotFoundError />} />
          </Routes>
        </main>
        <footer>
          Footer of page
        </footer>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<AppRoutes />);
