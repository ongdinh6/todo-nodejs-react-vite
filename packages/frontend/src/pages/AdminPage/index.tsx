import React, { ReactElement, useEffect, useState } from "react";

import ListToggles from "components/ListToggles";
import { FeatureToggle } from "apis/toggle/type.ts";
import FeatureToggleAPI from "apis/toggle/client.ts";
import { useSnackbar } from "contexts/contexts.tsx";

const featureToggleClient = new FeatureToggleAPI();

const AdminPage = (): ReactElement => {
  const [featureToggles, setFeatureToggles] = useState<FeatureToggle[]>([]);
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    let ignore = false;
    const loadAllToggles = async () => {
      const toggles = await featureToggleClient.loadAll();
      if (!ignore) {
        setFeatureToggles(toggles);
      }
    };
    loadAllToggles().catch((error) => showSnackbar({ message: error.message, severity: "error" }));
    return () => {
      ignore = true;
    };
  }, [showSnackbar]);

  return (
    <>
      Admin Page
      <ListToggles toggles={featureToggles} />
    </>
  );
};

export default AdminPage;
