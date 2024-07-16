const express =require("express");
const router = express.Router();
const dept= require("./../models/department");
router.post("/", async(req,res)=>{
       try{
          const data = req.body;
          const newdept = new dept(data);
          const response = await newdept.save();
          console.log("data saved");
          res.status(200).json(response);
       }
       catch(err){
         console.log(err)
          res.status(500).json({error : "Internal server error"});
       }
     });
// router.get("/",async(req,res)=>{
//         try{
//             const data = await dept.find();
//             console.log(" data featched");
//             res.status(200).json(data); 
//         }
//         catch(err){
//            console.log(err);
//            res.status(500).json({error : "Internal server error"});
//         }
//      });

     module.exports = router;