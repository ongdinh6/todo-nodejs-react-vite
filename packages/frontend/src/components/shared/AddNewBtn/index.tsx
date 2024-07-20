import React, { ReactElement } from "react";
import { Button } from "@mui/material";

type AddNewBtnProps = {
  name: string,
}

const AddNewBtn = ({ name }: AddNewBtnProps): ReactElement => {
  return <Button className={"normal-case rounded-full"} variant={"contained"}>Add new {name}</Button>;
}

export default AddNewBtn;