import { Router } from "express";

const router = Router();

import createdSupplier from "@/controllers/supplier/create.controller.js";

router.post("/create", createdSupplier);

export default router;
