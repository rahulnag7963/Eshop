const express = require('express');
const router = express.Router();
const product = require('../model/model');
const productController = require('../controllers/controller');

router.get("/", productController.getAllModels);

module.exports = router;