import React, { ReactElement } from "react";
import { List, ListItem } from "@mui/material";
import { v4 as uuid } from "uuid";

import { FeatureToggle } from "apis/toggle/type.ts";
import FeatureToggleItem from "components/ListToggles/FeatureToggleItem";

type ListTogglesProps = {
  toggles: FeatureToggle[];
};

const ListToggles = ({ toggles }: ListTogglesProps): ReactElement => {
  return (
    <List>
      {toggles?.map((toggle) => (
        <ListItem key={uuid()}>
          <FeatureToggleItem featureToggle={toggle} />
        </ListItem>
      ))}
    </List>
  );
};

export default ListToggles;
