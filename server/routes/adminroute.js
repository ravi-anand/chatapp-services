const express = require("express");

const adminController = require("../handler/controller/admin.controller");
const userController = require("../handler/controller/user.controller");

const adminrouter = express.Router();
//localhost:4001/admin/welcome

// admin controller
adminrouter.route("/createuser").post(adminController.createuser);
adminrouter.route("/edituser").post(adminController.edituser);
adminrouter.route("/getuserlist").post(userController.getUserList);


module.exports = adminrouter;
