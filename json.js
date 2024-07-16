const express = require("express")
const app = express();
const db =require("./db")
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
// const person  =require("./models/person")
// const menuItem = require("./models/Menuitem");
const emp = require("./models/employee");
// const dept= require("./models/department");
// const stu =require("./models/student"); 
// import the router files
const empRoutes= require("./routes/empRoutes");
// // // use the routers
app.use("/emp",empRoutes);
// const deptRoutes = require("./routes/deptRoutes");
// app.use("/dept", deptRoutes);
// const stuRoutes = require("./routes/stuRoutes");
// app.use("/stu", stuRoutes)
 app.listen(PORT,()=>{
   console.log("listing on port 3000")
// app.listen(3000,()=>{
//     console.log("listing on port 3000")
})



