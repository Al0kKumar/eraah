import { Request, Response } from "express";
import Student from "../models/students";

// ✅ Total number of students
export const count = async (req: Request, res: Response) => {
  try {
    const total = await Student.countDocuments(); // more optimized than `.find()`
    res.status(200).json({ total });
  } catch (err) {
    res.status(500).json({ msg: "Error counting students" });
  }
};

// ✅ Average age of students
export const avgAge = async (req: Request, res: Response) => {
  try {
    const result = await Student.aggregate([
      {
        $group: {
          _id: null,
          averageAge: { $avg: "$age" }
        }
      }
    ]);

    const averageAge = result[0]?.averageAge || 0;
    res.status(200).json({ averageAge: parseFloat(averageAge.toFixed(2)) });
  } catch (err) {
    res.status(500).json({ msg: "Error calculating average age" });
  }
};
