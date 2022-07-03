const express = require('express');
const router = express.Router();
import Product from '../model/model.js';


router.get("/",async (req,res,next)=> {
    var products;
    try {
        products = await Product.find();
    } catch(err) {
        console.log(err);
    }

    if(!products){
        return res.status(404).json({message:"What you are looking for no longer exists"});
    }
});