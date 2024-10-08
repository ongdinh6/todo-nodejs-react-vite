import React, { ReactElement } from "react";
import { List, Stack, Typography } from "@mui/material";
import classNames from "classnames";

interface SubPageFooterProps {
  className?: string;
}

export const SubPageFooter = ({ className }: SubPageFooterProps): ReactElement => {
  return (
    <Stack direction={"row"} className={classNames(className)}>
      <Typography variant={"subtitle2"}>©2020 Book Worm. All rights reserved</Typography>
      <List></List>
    </Stack>
  );
};
