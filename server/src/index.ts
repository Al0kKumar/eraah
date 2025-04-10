import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import studentRoutes from "./routes/studentRoutes"
import { justOnce } from "./utils/fetchStudents";
import auth from "./routes/authRoutes"
import cors from "cors";
import data from "./routes/dataRoutes";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 

connectDB();
justOnce();

app.use("/api", studentRoutes);
app.use("/api/auth", auth);
app.use("/api/data", data);

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})