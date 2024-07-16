const mongoose = require("mongoose");
const deptSchema = new mongoose.Schema({
    dname :{
        type : String,
        required : true
    },
    deptno :{
        type : Number,
        default : 0
    },
    loc :{
    type : String,
     required :["Bangalore","Hyderabad","Chennai","Vizag"]
    }
});

const dept = mongoose.model("Department details", deptSchema);
module.exports = dept;