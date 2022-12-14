const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.route");
const users = require("./modules/users.modules");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/users", usersRouter);


// Home Route 
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

// Route not found 
app.use((req,res,next)=>{
    res.status(404).json({message:"Route not found"})
});

// Server error 
app.use((err,req,res,next)=>{
    res.status(500).json({message:"Something broke"})
});



module.exports = app;
