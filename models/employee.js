const mongoose =require("mongoose");
const empSchema = new mongoose.Schema({
        empno : {
            type : Number,
            required : true
        },
        ename :{
            type : String,
            required : true
        },
        age :{
        type : Number,
        required :true
        },
        salary :{
        type : Number,
        required : true
        },
        deptno :{
            type : Number,
            default : 0,
            required : true
        },
        job :{
            type : String,
            enum : ["salesman","manager","hr","teamlead"],
            required : true
        },
        join_date :{
            type :String,
            requred : true
        }
});

const emp = mongoose.model("employee details:", empSchema);
module.exports= emp;
