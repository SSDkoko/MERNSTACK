const mongoose = require("mongoose")
const authorsSchema=new mongoose.Schema({
Name:{
    type : String,
    required:[ true, "the Name is required"],
}  
},{timestamps:true})
module.exports=mongoose.model("authors",authorsSchema)