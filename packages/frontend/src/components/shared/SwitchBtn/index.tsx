import React, { ChangeEvent, ReactElement, useState } from "react";
import { Switch, SwitchProps } from "@mui/material";

interface SwitchBtnProps extends SwitchProps {}

const SwitchBtn = (props: SwitchBtnProps): ReactElement => {
  const { checked, onChange } = props;
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange && onChange(e, e.target.checked);
  };

  return <Switch checked={isChecked} onChange={(e) => handleChange(e)} />;
};

export default SwitchBtn;
