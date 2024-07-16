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
     });
module.exports = router;