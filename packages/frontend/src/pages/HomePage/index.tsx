import React, { ReactElement } from "react";
import { Box } from "@mui/material";
import { useFlags } from "launchdarkly-react-client-sdk";

const HomePage = (): ReactElement => {
  const { hideWelcomeMesssage } = useFlags();

  return (
    <Box>
      <p>Home Page</p>
      {hideWelcomeMesssage && <h1>Welcome to Home Page</h1>}
    </Box>
  );
};

export default HomePage;
