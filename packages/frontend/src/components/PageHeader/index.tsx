import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Button, List, ListItem } from "@mui/material";

import { useSnackbar } from "stores/contexts.tsx";
import FeatureToggleAPI from "apis/toggle/client.ts";

const PageHeader = (): ReactElement => {
  const { showSnackbar } = useSnackbar();

  const handleShowToggle = () => {
    new FeatureToggleAPI().loadAll().catch((e) => showSnackbar({ message: e.message, severity: "error" }));
  };

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
