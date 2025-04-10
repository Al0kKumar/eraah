import express from "express";
const app = express();
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import studentRoutes from "./routes/studentRoutes"
import getToken from "./routes/dummyTokenRoute"
import { justOnce } from "./utils/fetchStudents";
dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();
justOnce();

app.use("/api", studentRoutes);
app.use("/api", getToken);

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})