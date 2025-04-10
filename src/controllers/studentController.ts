import express, { Request, Response } from "express";
import Student from "../models/students";

export const getStudents = async (req: Request, res : Response) => {
    try {
      const { active, sortBy } = req.query;
  
      const query: any = {};
      if (active !== undefined) query.active = active === "true";
  
      const sortOption: any = {};
      if (sortBy === "name") sortOption.name = 1;
  
      const students = await Student.find(query).sort(sortOption);
      res.status(200).json(students);
    } catch (err) {
      console.error("Error getting students:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  };