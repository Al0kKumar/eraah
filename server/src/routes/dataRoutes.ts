import { Router } from "express";
import { count } from "../controllers/DataController";
import { avgAge } from "../controllers/DataController";
const router = Router();

router.get("/count", count);
router.get("/avg", avgAge);

export default router;