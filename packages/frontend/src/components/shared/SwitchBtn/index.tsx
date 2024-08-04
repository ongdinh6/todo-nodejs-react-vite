import React, { ReactElement } from "react";
import { Switch, SwitchProps } from "@mui/material";

interface SwitchBtnProps extends SwitchProps {}

const SwitchBtn = (props: SwitchBtnProps): ReactElement => {
  return <Switch {...props} />;
};

export default SwitchBtn;
