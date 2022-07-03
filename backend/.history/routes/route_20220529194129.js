const express = require("express");
const router = express.Router();
const Product = require("../model/model");
const productController = require("../controllers/controller");

router.get("/", productController.getAllModels);
router.post("/", productController.addProduct);
router.get("/:id", productController.getId);
router.put("/:id",productController.updateProduct);
router.delete("./id",productController.deleteProduct);
module.exports = router;