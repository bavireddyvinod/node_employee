const express = require("express");
const router = express.Router();
const stu =require("./../models/student"); 
router.post("/", async(req, res)=>{
        try{
        const data = req.body;
        const newstu = new stu(data);
        const response = await newstu.save();
        console.log("data saved");
        res.status(200).json(response);
        }
        catch(err){
        console.log(err);
        res.status(500).json({error : "Internal server error"})
        }
     });
router.get("/", async(req,res)=>{
        try{
          const data = await stu.find();
          console.log("data featched");
          res.status(200).json(data);
        }
        catch(err){
         console.log(err);
         res.status(500).json({error : "Internal server error"});
        }
     });

module.exports = router;