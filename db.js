const mongoose= require("mongoose")
//define the mongodb connection URL
const mongoURL = "mongodb://localhost:27017/Database"
//set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    UseUnifiedTopology: true
})

// Get the default connection
// Mongoose maintains a default connection object representing the mongooes the mongodb connection
const db = mongoose.connection;

// define event listeners for daatabase connection

db.on("connected", ()=>{
    console.log("connected to MongoDB srver");
})
db.on("error",()=>{
    console.log("MongoDB connection error:", err);
})
db.on("disconnected",()=>{
    console.log("MongoDB disconnected  ");
});
module.exports = db;
