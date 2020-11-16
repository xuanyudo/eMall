var mongoose = require("mongoose");
mongoose.pluralize(null);

var BrandSchema = mongoose.Schema;

var BrandSchemaRef = new BrandSchema({
    bname:String,
});

var BrandModel = mongoose.model("brands",BrandSchemaRef);

module.exports = BrandModel;