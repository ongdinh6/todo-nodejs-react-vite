import React, { ReactElement, useEffect, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { LDContext, useLDClient } from "launchdarkly-react-client-sdk";
import { Stack } from "@mui/material";

import AdminPage from "pages/AdminPage";
import ChatBotPage from "pages/ChatBotPage";
import HomePage from "pages/HomePage";
import PageFooter from "components/PageFooter";
import PageHeader from "components/PageHeader";
import PageNotFound from "pages/ErrorPage/PageNotFound";
import ProductList from "pages/ProductList";

import styles from "./Index.module.css";

const App = () => {
  return (
    <Stack direction={"column"} className={styles.main}>
      <header className={"flex-0"}>
        <PageHeader />
      </header>
      <main className={"flex-1"}>
        <Outlet />
      </main>
      <footer>
        <PageFooter />
      </footer>
    </Stack>
  );
};

const AdminLayout = () => {
  return (
    <Stack direction={"column"} className={styles.main}>
      <header className={"flex-0"}>Admin Header</header>
      <main className={"flex-1"}>
        <Outlet />
      </main>
      <footer>
        <PageFooter />
      </footer>
    </Stack>
  );
};

const AppRoutes = (): ReactElement => {
  const client = useLDClient();
  const [enableChat, setEnableChat] = useState(false);

  useEffect(() => {
    const evaluating = async () => {
      if (client) {
        const userGroupsContext: LDContext = {
          kind: "user",
          key: "app-user-testing-0001",
          group: ["test"]
        };
        await client.identify(userGroupsContext);
        const enableChatAccess = await client.variation("enable-chat-access", false);
        setEnableChat(enableChatAccess);
      }
    }
    evaluating().catch(e => console.error(e));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />}>
          <Route index element={<HomePage />} />
          <Route path={"list-products"} element={<ProductList />} />
          {enableChat && <Route path={"chat-bot"} element={<ChatBotPage />} />}
        </Route>
        <Route path={"/admin"} element={<AdminLayout />}>
          <Route index element={<AdminPage />} />
        </Route>
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
