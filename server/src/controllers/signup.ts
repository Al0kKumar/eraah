import { Request, Response } from "express";
import user from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const alreadyThere = await user.findOne({ email });
    if (alreadyThere) {
      res.status(400).json({ msg: "User already registered" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await user.create({ email, password: hashedPassword });

    if (!newUser) {
      res.status(500).json({ msg: "Something went wrong with user creation" });
      return;
    }

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    res.status(201).json({ msg: "User registered successfully", token });
    return;
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
    return;
  }
};
