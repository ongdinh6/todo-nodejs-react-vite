import React from "react";
import { ReactElement } from "react";
import { Stack, Typography } from "@mui/material";

type NavBarProps = {
  items: ReactElement[];
  className?: string;
}

const NavBar = ({ items, className }: NavBarProps) => {
  return <Stack component="nav" className={className} direction="row" spacing={2}>
    { items.map(item => (
     item
    ))}
  </Stack>
}

export default NavBar;
