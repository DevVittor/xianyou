import { Router } from "express";

const router = Router();

import registerNewUser from "@/controllers/user/register.controller.js";
import loginUser from "@/controllers/user/login.controller.js";

router.post("/register", registerNewUser);
router.post("/login", loginUser);

export default router;
