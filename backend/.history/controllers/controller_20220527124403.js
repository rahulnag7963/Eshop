const req = require('express/lib/request');
const res = require('express/lib/response');
const Product = require('../model/model');

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

const addProduct = async() => {
    const {name, author, description, price, availability, rating} = req.body;
    var product;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            availability,
            rating             
        });
        await product.save();
    } catch(err) {
        console.log(err); 
    }
    if(!product){
        return res.status(500).json({message:"product cannot be added"});
    }
    return res.status(201).json({product});
}

exports.getAllModels = getAllModels;