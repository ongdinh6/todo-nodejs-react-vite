import { Router } from "express";
import ldClient from "launchdarkly/ldClient";
import { FEATURE_FLAG_KEY } from "launchdarkly/featureFlag";

const router = Router();

// Subscribe to changes in the feature flag
router.get("", async (_req, res) => {
  const isMaintenanceEnabled = await ldClient.getFlagValue(FEATURE_FLAG_KEY.HIDE_WELCOME_MESSAGE);
  if (isMaintenanceEnabled) {
    res.status(503).send(new Error("Server is unavailable"));
  } else {
    res.send(`Feature Flags hide_welcome_message is ${isMaintenanceEnabled}`);
  }
});

router.put("/schedule/update", async (req, res) => {
  // const body = req.body;
  // const { newSchedule, oldSchedule } = body;
  // const updatedSchedule = await Sc.(newSchedule, oldSchedule);
  // res.json(updatedSchedule);
});

export default router;
