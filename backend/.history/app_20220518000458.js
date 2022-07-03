import express from 'express';
import mongoose from 'mongoose';


const app = express();

mongoose.connect(
    "mongodb+srv://Admin:wdveqJBM5DGR4OzY@cluster0.bxsgc.mongodb.net/Db1?retryWrites=true&w=majority"
).then(()=>console.log("Connection established!")
).then(()=>{
    app.listen(5000);
}
).catch((err)=>console.log(err));



//wdveqJBM5DGR4OzY
console.log("server running");