import { Request, Response } from "express";
import user from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userFound = await user.findOne({ email });
    if (!userFound) {
      res.status(401).json({ msg: "User does not exist" });
      return;
    }

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      res.status(401).json({ msg: "Invalid credentials" });
      return;
    }

    const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    res.status(200).json({ msg: "Login successful", token });
    return;
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
    return;
  }
};
