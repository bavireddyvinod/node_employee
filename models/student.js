const  mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
 name :{
    type : String,
    required : true
 },
 age :{
    type : Number,
    required : true
 },
 class : {
   type : String,
   required: true
 },
 marks : {
  type : Number,  
  required: true
 },
 gender:{
    type : String,
    required: true
 }
});


const stu =mongoose.model("student details:", studentSchema)
module.exports = stu;