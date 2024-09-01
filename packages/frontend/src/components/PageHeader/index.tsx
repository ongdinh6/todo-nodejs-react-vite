import React, { ReactElement, useState } from "react";
import { Button, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

import { useSnackbar } from "contexts/contexts.tsx";
import FeatureToggleAPI from "apis/toggle/client.ts";
import { NAV_TABS, NavTab, HeaderTab } from "components/PageHeader/type.ts";

interface TabProps extends HeaderTab {
  activated: boolean;
  onClick: () => void;
}

const Tab = ({ name, displayName, activated, onClick }: TabProps) => {
  return (
    <ListItem>
      <Link onClick={onClick} to={name} className={activated ? "text-blue-600" : ""}>
        {displayName}
      </Link>
    </ListItem>
  );
};

const PageHeader = (): ReactElement => {
  const { showSnackbar } = useSnackbar();
  const [activeTab, setActiveTab] = useState<NavTab>(window.location.pathname.substring(1) as NavTab);

  const handleShowToggle = () => {
    new FeatureToggleAPI().loadAll().catch((e) => showSnackbar({ message: e.message, severity: "error" }));
  };

  const handleChangeTab = (tab: string) => setActiveTab(tab as NavTab);

  return (
    <List className={"flex float-left text-nowrap"}>
      <ListItem>
        <Button onClick={handleShowToggle}>Show Toggles</Button>
      </ListItem>
      {NAV_TABS.map((tab) => (
        <Tab
          key={tab.name}
          name={tab.name}
          displayName={tab.displayName}
          activated={activeTab === tab.name}
          onClick={() => handleChangeTab(tab.name)}
        />
      ))}
    </List>
  );
};

export default PageHeader;
