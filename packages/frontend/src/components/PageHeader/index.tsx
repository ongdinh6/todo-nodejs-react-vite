import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "@mui/material";

const PageHeader = (): ReactElement => {
  return (
    <List>
      <ListItem>
        <Link to={""}>Home</Link>
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
