var express = require("express");

var router = express.Router();

var ProductController = require("../controller/product.controller.js");

router.get("/products",ProductController.getProducts);

module.exports = router;