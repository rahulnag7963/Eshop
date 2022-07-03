const express = require('express');
const router = express.Router();
const Product = require('../model/model.js');
const productController = require('../controllers/controller');

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
    return res.status(200).json({products});
});

module.exports = router;