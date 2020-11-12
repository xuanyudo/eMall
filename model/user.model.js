var mongoose = require("mongoose");
mongoose.pluralize(null);

var UserSchema = mongoose.Schema;

var UserSchemaRef = new UserSchema({
    _id:Number,
    uname:String,
    role:String
});

var UserModel = mongoose.model("users",UserSchemaRef);

module.exports = UserModel;