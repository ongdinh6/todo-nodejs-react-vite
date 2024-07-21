import { Router } from "express";

import featureToggleRoutes from "routes/featureToggleRoutes";
import maintenanceRoutes from "routes/maintenanceRoutes";

const router = Router();

router.use("/feature-toggles", featureToggleRoutes);

router.use("/maintenance", maintenanceRoutes);

export default router;
