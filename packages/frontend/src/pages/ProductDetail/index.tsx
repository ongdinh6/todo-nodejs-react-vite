import React, { ReactElement } from "react";
import { Stack } from "@mui/material";

export const ProductDetail = (): ReactElement => {
  return (
    <>
      <Stack direction={"row"}>
        <div>Image</div>
        <div>detail</div>
      </Stack>
    </>
  );
};
