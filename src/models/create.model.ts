import mongoose from "mongoose";

const createSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:String,
    product:Number
})


const Create = mongoose.model("create",createSchema)
export default Create;
