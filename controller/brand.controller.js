var BrandModel = require("../model/brand.model.js");

var getBrands = (req,res)=>{
    BrandModel.find({},(err,data)=>{
        if(err) throw err;

        res.json(data);

    })
}

var addBrand = (req,res)=>{
    let brandname = req.body.bname;
    
    BrandModel.find({bname:brandname},(err,data)=>{
        if(err){
            res.json({"msg":"Some error occur..."});
        }
        else if(data.length!=0){
            res.json({"msg":"brand already exist...","type":"error"});
        }else{
            let brand = new BrandModel({
                bname:brandname
            });
            brand.save((err,data)=>{
                if(err){
                    res.json({"msg":"Some error occur..."});
                }else{
                    res.json({"msg":"Add brand successful...","type":"success"});
                }
            })
        }
        
    })
    
}

var deleteBrand = (req,res)=>{
    var deleteId = req.params.id;
    
    BrandModel.deleteOne({_id:deleteId},(err,result)=>{
        console.log(deleteId);
        if(err) throw err
        console.log(result);
        if(result.deletedCount>0){
            res.json({"msg":"Record deleted successfully","type":"success"});
        }else{
            res.json({"msg":"Record not present","type":"error"});
        }

    })
}

module.exports = {getBrands, addBrand, deleteBrand}