import React, { ReactElement, ReactNode } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import classNames from "classnames";

interface CategoriesMenuProps {
  leftMenuTitle: string;
  rightMenuTitle: ReactNode;
  content: ReactNode;
  rightIcon?: boolean;
  className?: string;
}

export const CategoriesMenu = ({
  leftMenuTitle,
  rightMenuTitle,
  content,
  rightIcon = true,
  className,
}: CategoriesMenuProps): ReactElement => {
  return (
    <Box className={"py-20"}>
      <Stack direction={"column"} className={"space-y-5"}>
        <Stack direction={"row"} className={"flex justify-between"}>
          <Typography variant={"h4"} component={"h4"}>
            {leftMenuTitle}
          </Typography>
          <Box className={"space-x-2"}>
            {rightMenuTitle}
            <ArrowForwardIosIcon />
          </Box>
        </Stack>
        <Stack direction={"row"} className={classNames("flex justify-between", className)}>
          {content}
        </Stack>
      </Stack>
    </Box>
  );
};
