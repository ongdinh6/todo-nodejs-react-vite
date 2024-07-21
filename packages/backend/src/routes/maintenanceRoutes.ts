import { Router } from "express";
import ldClient from "launchdarkly/ldClient";

const router = Router();

// Subscribe to changes in the feature flag
router.get("", async (_req, res) => {
  const isMaintenanceEnabled = await ldClient.getFlagValue("hide_welcome_message");
  if (isMaintenanceEnabled) {
    res.status(503).send(new Error("Server is unavailable"));
  } else {
    res.send(`Feature Flags hide_welcome_message is ${isMaintenanceEnabled}`);
  }
});

export default router;
