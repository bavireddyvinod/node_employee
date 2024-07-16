const express = require("express");
const router = express.Router();
const emp = require("./../models/employee");
router.post("/", async(req,res)=>{
        try{
           const data = req.body;
           const newemp = new emp(data);
           const response = await newemp.save();
           console.log("data saved");
           res.status(200).json(response);
        }
       catch(err){
        console.log(err);
         res.status(500).json({error: "Internal server error"});
       }
     })
    
router.get("/", async(req,res)=>{
        try{
            const data = await emp.find();
            console.log("data featched");
            res.status(200).json(data);
        }
        catch(err){
          console.log(err);
          res.status(500).json({error: "Internal server error"});
        }
     })
// export router 
module.exports = router;