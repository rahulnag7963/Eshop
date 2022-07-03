const express = require('express');
const router = express.Router();
const Product = require('../model/model.js');
const productController = require('../controllers/controller');

router.get("/",productController.getAllModels);

module.exports = router;