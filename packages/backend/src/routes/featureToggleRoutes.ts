import { Router } from "express";

import FeatureToggleService from "services/featureToggleService";
import LdClient from "launchdarkly/ldClient";

const router = Router();

const ldClient = LdClient.getInstance();

router.get("/", async (_req, res) => {
  const allToggles = await FeatureToggleService.allToggles();
  res.json(allToggles);
});

router.put("/:name/:value", async (req, res) => {
  const { name, value } = req.params;
  console.log("Update value of toggle: ", name, value);
  if (typeof name !== "string" || typeof value !== "string") {
    throw new Error("BadRequest: The path variable is invalid.");
  }
  await ldClient.evaluate(name, value);
  const updated = await FeatureToggleService.update(name, value);
  res.json(updated);
});

export default router;
