import React, { ReactElement } from "react";
import { Box, FormControl, InputBase, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Typography variant={"h3"} component={"h3"}>
      BOOKWORM
    </Typography>
  );
};

export const NavBarHeader = (): ReactElement => {
  return (
    <Stack direction="row" className={"justify-between p-5 border items-center"}>
      <Stack direction={"row"} spacing={5} sx={{ width: "60%" }}>
        <Logo />
        <Link to={"/"} className={"active"}>
          Home
        </Link>
        <Link to={"/categories"}>Categories</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/pages"}>Pages</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/others"}>Others</Link>
      </Stack>
      <Box className={"flex bg-gray-100 h-14 items-center"} sx={{ width: "30%" }}>
        <FormControl variant="outlined" className={"block"} sx={{ width: "100%" }}>
          <SearchIcon sx={{ width: "10%", marginRight: "10px" }} />
          <InputBase placeholder={"Search for Books by Keyword ..."} sx={{ width: "80%" }} />
        </FormControl>
      </Box>
    </Stack>;
  );
};
