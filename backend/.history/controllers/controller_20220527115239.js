const express = require('express');
const model = require('../model/model');
const router = express.router();


const getAllModels = async (req, res, next) => {
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
}

exports.getAllModels = getAllModels;