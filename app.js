var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var port = 9090;

var url = "mongodb://localhost:27017/mydb";

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});

mongoose.connection;

var Product = require("./router/product.router.js")

var User = require("./router/user.router.js")

var Brand = require("./router/brand.router.js")

app.use("/product",Product);
app.use("/user",User);
app.use("/brand", Brand);

app.listen(port,()=>console.log(`Server is running on port: ${port}`));


