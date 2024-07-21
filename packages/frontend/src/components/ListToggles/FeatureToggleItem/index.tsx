import React, { ChangeEvent, ReactElement } from "react";
import { Stack } from "@mui/material";

import { FeatureToggle } from "apis/toggle/type.ts";
import SwitchBtn from "components/shared/SwitchBtn";
import FeatureToggleAPI from "apis/toggle/client.ts";

type FeatureToggleItemProps = {
  featureToggle: FeatureToggle;
};

const featureToggleClient = new FeatureToggleAPI();

const FeatureToggleItem = ({ featureToggle }: FeatureToggleItemProps): ReactElement => {
  const handleUpdate = async (e: ChangeEvent<HTMLInputElement>) => {
    const updated = await featureToggleClient.update(featureToggle.name, String(e.target.checked));
    console.log("Updated successfully: ", updated);
  };

  return (
    <Stack direction={"row"}>
      <span>{featureToggle.name}</span>
      <span>
        <SwitchBtn checked={featureToggle.value === "true"} onChange={handleUpdate} />
      </span>
      <span>{featureToggle.description}</span>
    </Stack>
  );
};

export default FeatureToggleItem;
