const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/route');
const app = express();

app.use("/products",router);

mongoose.connect(
    "mongodb+srv://Admin:wdveqJBM5DGR4OzY@cluster0.bxsgc.mongodb.net/?retryWrites=true&w=majority"
).then(()=>console.log("Connection established!")
).then(()=>{
    app.listen(5000);
}
).catch((err)=>console.log(err));



//wdveqJBM5DGR4OzY
console.log("server running");