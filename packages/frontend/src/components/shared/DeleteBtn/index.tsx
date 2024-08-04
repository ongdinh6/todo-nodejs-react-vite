import React, { ReactElement } from "react";
import { Button, ButtonProps } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";

const DeleteBtn = (props: ButtonProps): ReactElement => {
  return (
    <Button className={"normal-case rounded-full"} variant={"contained"} startIcon={<DeleteOutlined />} {...props}>
      Delete
    </Button>
  );
};

export default DeleteBtn;
