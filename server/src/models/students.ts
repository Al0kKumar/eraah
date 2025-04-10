import mongoose, { Mongoose, Schema } from "mongoose";

const studentSchema = new mongoose.Schema({
    name : String,
    age  : Number,
    Course : String,
    active : Boolean,
    lastUpadated : {
        type : Date,
        default : Date.now()
    }
})


const Student = mongoose.model('Student', studentSchema);

export default Student;