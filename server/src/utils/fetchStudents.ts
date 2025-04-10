import axios from "axios";
import { Document } from "mongoose"; // Import Document type
import Student from "../models/students";

interface IStudent extends Document {
  name: string;
  age: number;
  Course: string;
  active: boolean;
  lastUpdated: Date;
}


interface APIStudent {
    name: string;
    age: number;
    Course: string;
    active: boolean;
    id: string;
  }
  
  export const syncStudentData = async () => {
    try {
      const response = await axios.get<APIStudent[]>(
        "https://67ebf57baa794fb3222c4652.mockapi.io/eraah/students"
      );
      const students = response.data; // Now it's of type APIStudent[]
      
      const processed: Partial<IStudent>[] = students.map((student) => {
        const { id, ...rest } = student; 
        return {
          ...rest,
          lastUpdated: new Date(),
        };
      });

      await Student.insertMany(processed);
      
    } catch (error) {
      console.error("Error syncing student data:", error);
    }
  };
  
export const justOnce = async () => {

  const existing = await Student.findOne({});
  if (!existing) {
    console.log("Syncing student data from mock API...");
    await syncStudentData();
    console.log("Data synced.");
  }
}