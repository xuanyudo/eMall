var mongoose = require("mongoose");
mongoose.pluralize(null);

var ProductSchema = mongoose.Schema;

var ProductSchemaRef = new ProductSchema({
    _id:Number,
    pname:String,
    price:Number,
    description:String,
    releaseDate:Date
});

var ProductModel = mongoose.model("products",ProductSchemaRef);

module.exports = ProductModel;