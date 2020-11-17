var ProductModel = require("../model/product.model.js");

var getProducts = (req,res)=>{
    ProductModel.find({},(err,data)=>{
        if(err) throw err;

        res.json(data);
    })
}

var getProductById=(req,res)=>{
    var id = req.params.id;
    ProductModel.find({_id:id},(err,data)=>{
        if(err) throw err;
        res.json(data);
    })
}

var storeProduct=(req,res)=>{
    let product = new ProductModel({
        pname:req.body.pname,
        price:req.body.price,
        description:req.body.description,
        imageUrl:req.body.imageUrl,
        brand:req.body.brand,
        releaseDate:new Date()
    });

    product.save((err,data)=>{
        if(err){
            res.json({"msg":"Some error occur..."});
        }else{
            res.json({"msg":"Add product successful...", "type":"success"});
        }
    })
}

var updateProduct=(req,res)=>{
    var id = req.body._id;
    var pname = req.body.pname;
    var price = req.body.price;
    var description = req.body.description;
    var imageUrl1 = req.body.imageUrl;
    var brand = req.body.brand;
    ProductModel.update({_id:id},{$set:{
        pname:pname,
        price:price,
        description:description,
        brand:brand,
        imageUrl:imageUrl1
    }},(err, data)=>{
        if(err) throw err;
        if(data.nModified>0){
            console.log(data)
            res.json({"msg":"Record updated successfully.","type":"success"});
        }else{
            res.json({"msg":"There is no update","type":"error"});
        }

    })
}

var deleteProduct = (req,res)=>{
    var id = req.params.id;
    ProductModel.deleteOne({_id:id},(err,data)=>{
        if(err) throw err

        res.json({"msg":"Record deleted successfully","type":"success"})
    })
}




module.exports = {getProducts, getProductById, storeProduct,updateProduct, deleteProduct}