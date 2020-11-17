var express = require("express");

var router = express.Router();

var ProductController = require("../controller/product.controller.js");

router.get("/products",ProductController.getProducts);
router.get("/products/:id",ProductController.getProductById);

router.post("/addProduct",ProductController.storeProduct);
router.put("/updateProduct",ProductController.updateProduct);
router.delete("/deleteProduct/:id",ProductController.deleteProduct);

module.exports = router;