import React, { ReactElement, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, List, ListItem } from "@mui/material";
import { v4 as uuid } from "uuid";

import { useSnackbar } from "stores/contexts.tsx";
import InternalAPI from "apis/internal/client.ts";
import FeatureToggleAPI from "apis/toggle/client.ts";

const PageHeader = (): ReactElement => {
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    const loadSystemNotify = async () => {
      await new InternalAPI().systemNotification();
    }
    loadSystemNotify().catch(e => showSnackbar({ id: uuid(), message: e.message, severity: "error" }));
  }, []);


  const handleShowToggle = () => {
    const id = uuid();
    new FeatureToggleAPI().loadAll().catch(e => showSnackbar({ id: id, message: id, severity: "error" }));
  }

  return (
    <List>
      <Button onClick={handleShowToggle}>Show Toggles</Button>
      <ListItem>
        <Link to={""}>Home</Link>
      </ListItem>
      <ListItem>
        <Link to={"/chat-bot"}>Chat with Assistant</Link>
      </ListItem>
      <ListItem>
        <Link to={"/list-products"}>List Products</Link>
      </ListItem>
      <ListItem>
        <Link to={"/page-not-found"}>Page Not Found</Link>
      </ListItem>
    </List>
  );
};

export default PageHeader;
