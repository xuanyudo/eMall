var UserModel = require("../model/user.model.js");

var getUsers = (req,res)=>{
    UserModel.find({},(err,data)=>{
        if(err) throw err;

        res.json(data);

    })
}

module.exports = {getUsers}