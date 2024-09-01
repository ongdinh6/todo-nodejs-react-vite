import { Router } from "express";

import featureToggleRoutes from "routes/featureToggleRoutes";
import maintenanceRoutes from "routes/maintenanceRoutes";
import productRoutes from "routes/productRoutes";

const router = Router();

router.use("/feature-toggles", featureToggleRoutes);

router.use("/maintenance", maintenanceRoutes);

router.use("/products", productRoutes);

export default router;
