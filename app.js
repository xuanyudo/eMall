var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = 9090;

var url = "mongodb://localhost:27017/mydb";

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});

mongoose.connection;

var Product = require("./router/product.router.js")

var User = require("./router/user.router.js")

app.use("/product",Product);
app.use("/user",User);

app.listen(port,()=>console.log(`Server is running on port: ${port}`));


