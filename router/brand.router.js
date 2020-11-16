var express = require("express");

var router = express.Router();

var BrandController = require("../controller/brand.controller.js");

router.get("/brands",BrandController.getBrands);
router.post("/addBrand",BrandController.addBrand);
router.delete("/deleteBrand/:id",BrandController.deleteBrand);

module.exports = router;