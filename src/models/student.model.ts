import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:String,
    age:String,
    marks:String,
    
})


const Student = mongoose.model("student",studentSchema)
export default Student;
