const express = require("express");
const auth = require("../middleware/auth");

const adminController = require("../handler/controller/admin.controller");
const userController = require("../handler/controller/user.controller");

const adminrouter = express.Router();
//localhost:4001/admin/welcome

// admin controller
adminrouter.route("/createuser").post(auth('adminrights'), adminController.createuser);
adminrouter.route("/edituser").post(auth('adminrights'), adminController.edituser);
adminrouter.route("/getuserlist").post(auth('allrights'), userController.getUserList);


module.exports = adminrouter;
