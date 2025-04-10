import { Router } from "express";
import { getStudents } from "../controllers/studentController";
import { verifyToken } from "../middleware/authMiddleware";
const router = Router();


router.get("/students",verifyToken, getStudents);

export default router;

