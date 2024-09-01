import React, { ChangeEvent, ReactElement, useState } from "react";
import { Stack } from "@mui/material";

import { FeatureToggle } from "apis/toggle/type.ts";
import SwitchBtn from "components/shared/SwitchBtn";
import FeatureToggleAPI from "apis/toggle/client.ts";
import { useSnackbar } from "contexts/contexts.tsx";

type FeatureToggleItemProps = {
  featureToggle: FeatureToggle;
};

const featureToggleClient = new FeatureToggleAPI();

const FeatureToggleItem = ({ featureToggle }: FeatureToggleItemProps): ReactElement => {
  const { showSnackbar } = useSnackbar();
  const [isChecked, setIsChecked] = useState(featureToggle.value === "true");

  const handleUpdate = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const toggle = await featureToggleClient.update(featureToggle.name, String(e.target.checked));
      showSnackbar({ message: `Updated ${toggle.name} successfully!`, severity: "success" });
      setIsChecked(toggle.value === "true");
    } catch (e) {
      showSnackbar({ message: e, severity: "error" });
    }
  };

  return (
    <Stack direction={"row"}>
      <span>{featureToggle.name}</span>
      <span>
        <SwitchBtn checked={isChecked} onChange={handleUpdate} />
      </span>
      <span>{featureToggle.description}</span>
    </Stack>
  );
};

export default FeatureToggleItem;
