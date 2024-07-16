// const jsonString='{"name" : "vinodh", "age": 35, "location" : "Hyderabad" }';
// const jsonObject= JSON.parse(jsonString);
// console.log(jsonObject);
// console.log(typeof jsonObject);

// const objectToconvert ={
//     name: "Alice",
//      age : 34
//     };
// const json=JSON.stringify(objectToconvert);
// console.log(json);
// console.log(typeof json);
const express = require("express")
const app = express();
const db =require("./db")
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
// const person =require("./models/person")
// const menuItem = require("./models/Menuitem");
// const emp = require("./models/employee");
// const dept= require("./models/department");
const stu =require("./models/student"); 
// app.post("/person",async(req,res)=>{
//     try{
//         const data = req.body // assuming the reqest body contains the person data
//         // create a new person document using the mongoose model
//         const newPerson = new person(data);
//         //save the new person to the database
//         const response = await newPerson.save();
//         console.log("data saved");
//         res.status(200).json(response);    
//     }
//     catch(err){
//            console.log(err);
//            res.status(500).json({error: "Internal server error "});
//     }
//     })
//     app.get("/person",async(req,res)=>{
//         try{
//             const data = await person.find();
//             console.log("data fetched");
//             res.status(200).json(data);
//         }
//         catch(err){
//                 console.log(err);
//                 res.status(500).json({error: "Internal server error"});
//         }
//     })

// app.post("/menuItem",async(req,res)=>{
//         try{
//             const data = req.body // assuming the reqest body contains the person data
//             // create a new person document using the mongoose model
//             const newMenuitem = new menuItem(data);
//             //save the new person to the database
//             const response = await newMenuitem.save();
//             console.log("data saved");
//             res.status(200).json(response);    
//         }
//         catch(err){
//                console.log(err);
//                res.status(500).json({error: "Internal server error "});
//         }
//         })
//  app.get("/menuItem",async(req,res)=>{
//             try{
//                 const data = await menuItem.find();
//                 console.log("data fetched");
//                 res.status(200).json(data);
//             }
//             catch(err){
//                     console.log(err);
//                     res.status(500).json({error: "Internal server error"});
//             }
//         })
//  app.post("/emp", async(req,res)=>{
//     try{
//        const data = req.body;
//        const newemp = new emp(data);
//        const response = await newemp.save();
//        console.log("data saved");
//        res.status(200).json(response);
//     }
//    catch(err){
//     console.log(err);
//      res.status(500).json({error: "Internal server error"});
//    }
//  })

//  app.get("/emp", async(req,res)=>{
//     try{
//         const data = await emp.find();
//         console.log("data featched");
//         res.status(200).json(data);
//     }
//     catch(err){
//       console.log(err);
//       res.status(500).json({error: "Internal server error"});
//     }
//  })


//  app.post("/dept", async(req,res)=>{
//    try{
//       const data = req.body;
//       const newdept = new dept(data);
//       const response = await newdept.save();
//       console.log("data saved");
//       res.status(200).json(response);
//    }
//    catch(err){
//      console.log(err)
//       res.status(500).json({error : "Internal server error"});
//    }
//  });
//  app.get("/dept",async(req,res)=>{
//     try{
//         const data = await dept.find();
//         console.log(" data featched");
//         res.status(200).json(data); 
//     }
//     catch(err){
//        console.log(err);
//        res.status(500).json({error : "Internal server error"});
//     }
//  });

//  app.post("/stu", async(req, res)=>{
//     try{
//     const data = req.body;
//     const newstu = new stu(data);
//     const response = await newstu.save();
//     console.log("data saved");
//     res.status(200).json(response);
//     }
//     catch(err){
//     console.log(err);
//     res.status(500).json({error : "Internal server error"})
//     }
//  });
//  app.get("/stu", async(req,res)=>{
//     try{
//       const data = await stu.find();
//       console.log("data featched");
//       res.status(200).json(data);
//     }
//     catch(err){
//      console.log(err);
//      res.status(500).json({error : "Internal server error"});
//     }
//  });


// app.post("/items",(req, res)=>{
// // res.send("items data saved.")
// // })
// app.get("/",function(req,res){
//     res.send("Hello everyone.. welcome to hotel..")
// })

// app.get("/chicken",(Req,res)=>{
//     res.send("sure sir, i would love to server chicken")
// })
// app.get("/idli",(req, res)=>{
//     let customized_idli = {
//         name : "idily",
//         size : "10 cm diameter",
//         is_sambhar : true,
//         is_chutney : false
//     }
//  res.send(customized_idli)
// })
// import the router files
// const empRoutes= require("./routes/empRoutes");
// // // use the routers
// app.use("/emp",empRoutes);
// const deptRoutes = require("./routes/deptRoutes");
// app.use("/dept", deptRoutes);
const stuRoutes = require("./routes/stuRoutes");
app.use("/stu", stuRoutes);

app.listen(PORT,()=>{
    console.log("listing on port 3000")
// app.listen(3000,()=>{
//     console.log("listing on port 3000")
})



