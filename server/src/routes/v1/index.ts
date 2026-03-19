import { Router } from "express";

const router = Router();

import User from "@/routes/v1/user.routes.js";
import Supplier from "@/routes/v1/supplier.routes.js";

router.use("/user", User);
router.use("/supplier", Supplier);

export default router;
