var mongoose = require("mongoose");
mongoose.pluralize(null);

var ProductSchema = mongoose.Schema;

var ProductSchemaRef = new ProductSchema({
    pname:String,
    price:Number,
    description:String,
    imageUrl:String,
    brand:String,
    releaseDate:Date
});

var ProductModel = mongoose.model("products",ProductSchemaRef);

module.exports = ProductModel;