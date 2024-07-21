import React, { ReactElement } from "react";
import { Button } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";

const DeleteBtn = (): ReactElement => {
  return (
    <Button className={"normal-case rounded-full"} variant={"contained"} startIcon={<DeleteOutlined />}>
      Delete
    </Button>
  );
};

export default DeleteBtn;
