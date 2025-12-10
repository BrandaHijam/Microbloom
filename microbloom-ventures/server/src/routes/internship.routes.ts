import { Router } from "express";
import { listInternships, apply } from "../controller/internship.controller";
import { requireAuth } from "../middleware/auth";

const router = Router();
router.get("/", listInternships);
router.post("/apply", requireAuth, apply);

export default router;