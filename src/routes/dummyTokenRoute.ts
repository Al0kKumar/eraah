import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get("/token", (req, res) => {
  const user = { id: "dev123", role: "intern" };

  const token = jwt.sign(user, process.env.JWT_SECRET as string, { expiresIn: "1h" });

  res.json({ token });
});

export default router;
