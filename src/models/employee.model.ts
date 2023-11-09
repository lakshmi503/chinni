import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name:String,
    city:String,
    salary :String,
    
})


const Employee = mongoose.model("employee",employeeSchema)
export default Employee;