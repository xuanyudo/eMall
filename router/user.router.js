var express = require("express");

var router = express.Router();

var UserController = require("../controller/user.controller.js");

router.get("/users",UserController.getUsers);

module.exports = router;