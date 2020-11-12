var ProductModel = require("../model/product.model.js");

var getProducts = (req,res)=>{
    ProductModel.find({},(err,data)=>{
        if(err) throw err;

        res.json(data);

    })
}

module.exports = {getProducts}