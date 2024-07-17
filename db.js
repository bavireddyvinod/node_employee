const mongoose= require("mongoose")
require("dotenv").config();
//define the mongodb connection URL
// const mongoURL = process.env.MONGODB_URL_LOCAL;
// const mongoURL = "mongodb+srv://bavireddyvinod:Vinod1234567@cluster0.dkpuw1t.mongodb.net/";
const mongoURL =process.env.MONGODB_URL
//set up mongodb connection
mongoose.connect(mongoURL)
// Get the default connection
// Mongoose maintains a default connection object representing the mongooes the mongodb connection
const db = mongoose.connection;

// define event listeners for daatabase connection

db.on("connected", ()=>{
    console.log("connected to MongoDB srver");
})
db.on("error",()=>{
    console.log("MongoDB connection error:");
})
db.on("disconnected",()=>{
    console.log("MongoDB disconnected");
});
module.exports = db;
