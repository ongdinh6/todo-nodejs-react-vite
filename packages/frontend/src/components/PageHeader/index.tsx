import React, { ReactElement, useState } from "react";
import { Box, FormControl, InputBase, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { NAV_TABS, NavTab, HeaderTab } from "components/PageHeader/type.ts";
import { SubHeader } from "components/PageHeader/SubHeader";
import SearchIcon from "@mui/icons-material/Search";

interface TabProps extends HeaderTab {
  activated: boolean;
  onClick: () => void;
}

const Tab = ({ name, displayName, activated, onClick }: TabProps) => {
  return (
    <Link onClick={onClick} to={name} className={activated ? "text-green-400 font-medium" : ""}>
      {displayName}
    </Link>
  );
};

const PageHeader = (): ReactElement => {
  const [activeTab, setActiveTab] = useState<NavTab>(window.location.pathname.substring(1) as NavTab);

  const handleChangeTab = (tab: string) => setActiveTab(tab as NavTab);

  return (
    <>
      <SubHeader />
      <Box className={"border"}>
        <Stack direction="row" className={"container m-auto justify-between py-5 items-center"}>
          <Stack direction={"row"} className={"items-center"} spacing={5} sx={{ width: "60%" }}>
            <Typography variant={"h4"} component={"h4"}>
              BOOKWORM
            </Typography>
            {NAV_TABS.map((tab) => (
              <Tab
                key={tab.name}
                name={tab.name}
                displayName={tab.displayName}
                activated={activeTab === tab.name}
                onClick={() => handleChangeTab(tab.name)}
              />
            ))}
          </Stack>
          <Box className={"flex bg-gray-100 h-14 items-center"} sx={{ width: "30%" }}>
            <FormControl variant="outlined" className={"block"} sx={{ width: "100%" }}>
              <SearchIcon sx={{ width: "10%", marginRight: "10px" }} />
              <InputBase placeholder={"Search for Books by Keyword ..."} sx={{ width: "80%" }} />
            </FormControl>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default PageHeader;
