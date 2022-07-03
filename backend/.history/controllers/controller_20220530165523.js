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

const getId = async (req, res, next) => {
    const id = req.params.id;
    var product;
    try{ 
        product = await Product.findById(id); 
    }
    catch (err) {
        console.log(err);
    }
    if(!product) {
        return res.status(404).json({ message: "No products in database."})
    }
    return res.status(200).json({product});
};

const addProduct = async(req, res, next) => {
    const {name, author, description, price, availability, rating, image, category} = req.body;
    var product;
    try{
        product = new Product({
            name,
            author,
            description,
            price,
            availability,
            rating,
            image,
            category             
        });
        await product.save();
    } catch(err) {
        console.log(err); 
    }
    if(!product){
        return res.status(500).json({message:'product cannot be added'});
    }
    return res.status(201).json({product});
};

const updateProduct = async(req,res,next) => {
    const id = req.params.id;
    const {name, author, description, price, availability, rating, image, category} = req.body;
    var product;
    try{
        product = await Product.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            availability,
            rating,
            image,
            category
        })
        product = await product.save();
    }
    catch(err){ 
        console.log(err);
    }
    if(!product) {
        return res.status(404).json({ messege: "Cannot update by Id. Check if id is valid."})
    }
    return res.status(200).json({ product});
}

const deleteProduct = async (req, res ,next) => {
    const id = req.params.id;
    var product;
    try { 
        product = await Product.findByIdAndRemove(id);   
    } catch (err) {
        console.log(err);
    }
    if (!product) {
        return res.stauts(404).json({ messege: "Cannot delete by Id. Double check Id is correct."});
    }
        return res.status(200).json({ messege: "Product deleted!"});  
};

exports.getAllModels = getAllModels;
exports.addProduct = addProduct;
exports.getId =  getId;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;