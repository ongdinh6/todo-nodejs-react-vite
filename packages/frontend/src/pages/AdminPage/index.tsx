import React, { ReactElement, useEffect, useState } from "react";

import ListToggles from "components/ListToggles";
import { FeatureToggle } from "apis/toggle/type.ts";
import { useLDClient } from "launchdarkly-react-client-sdk";
import FeatureToggleAPI from "apis/toggle/client.ts";

const featureToggleClient = new FeatureToggleAPI();

const AdminPage = (): ReactElement => {
  const [featureToggles, setFeatureToggles] = useState<FeatureToggle[]>([]);
  // const ldClient = useLDClient();
  //
  // useEffect(() => {
  //   if (ldClient) {
  //     const allFlags = ldClient.allFlags();
  //     const toggles = Object.entries(allFlags).map(([key, value]) => ({ key, value }));
  //     setFeatureToggles(toggles);
  //   }
  // }, []);

  useEffect(() => {
    let ignore = false;
    const loadAllToggles = async () => {
      const toggles = await featureToggleClient.loadAll();
      if (!ignore) {
        setFeatureToggles(toggles);
      }
    };
    loadAllToggles().catch((error) => console.error("Failed while load all feature toggles. ", error));
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      Admin Page
      <ListToggles toggles={featureToggles} />
    </>
  );
};

export default AdminPage;
