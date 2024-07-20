import React, { ReactElement } from "react";
import { Button } from "@mui/material";
import { EditOutlined } from "@mui/icons-material";

const EditBtn = (): ReactElement => {
  return <Button className={"normal-case rounded-full"} variant={"contained"} startIcon={<EditOutlined />}>Edit</Button>;
}

export default EditBtn;
