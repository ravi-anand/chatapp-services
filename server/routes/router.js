const express = require("express");
const auth = require("../middleware/auth");

const userController = require("../handler/controller/user.controller");
const authController = require("../handler/controller/auth.controller");
const groupController = require("../handler/controller/group.controller");
const messageController = require("../handler/controller/message.controller");

const routerlist = express.Router();
//localhost:4001/api/welcome
// auth controller
routerlist.route("/register").post(authController.register);
routerlist.route("/login").post(authController.login);


// group controller
routerlist.route("/admin/createGroup").post(groupController.createGroup);
routerlist.route("/addGroupMember").post(groupController.addGroupMember);

// message Controller
routerlist.route("/getgroupmessage").post(messageController.GetGroupMessage);
routerlist.route("/sendmessage").post(messageController.sendMessage);

module.exports = routerlist;
