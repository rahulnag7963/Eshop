const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.use('./',(req,res,next)=>{
    res.send("app starts.");
});

mongoose.connect(
    "mongodb+srv://Admin:wdveqJBM5DGR4OzY@cluster0.bxsgc.mongodb.net/db1?retryWrites=true&w=majority"
).then(()=>console.log("Connection established!")
).then(()=>{
    app.listen(3001);
}
).catch((err)=>console.log(err));



//wdveqJBM5DGR4OzY
console.log("server running");