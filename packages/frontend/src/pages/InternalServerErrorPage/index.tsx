import React from "react";
import { Link } from "@mui/material";

const InternalServerErrorPage = () => {
  return (
    <div className={"block text-center pt-40"}>
      <h1 className={"text-4xl"}> Whoops, </h1>
      <h2 className={"text-3xl"}> Something went wrong :(</h2>
      <h4 className={"text-md"}>Please either refresh the page or return home to try again.</h4>
      <h4 className={"text-md"}>If the issue continues, please get in touch.</h4>
      <Link className={"normal-case mt-5"} variant={"button"} href={"/"}>
        Go Home
      </Link>
    </div>
  );
};

export default InternalServerErrorPage;
