import React, { ReactElement } from "react";
import { Stack } from "@mui/material";

type ButtonStackProps = {
  items: ReactElement[];
  className?: string;
}

const ButtonStack = ({ items, className }: ButtonStackProps) => {
  return <Stack className={className} direction="row" spacing={2}>
    {items.map(item => item)}
  </Stack>
}

export default ButtonStack;
