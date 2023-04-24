const express = require("express");
const auth = require("../middleware/auth");

const groupController = require("../handler/controller/group.controller");
const messageController = require("../handler/controller/message.controller");

const grouprouter = express.Router();

// group controller
grouprouter.route("/creategroup").post(auth('allrights'), groupController.createGroup);
grouprouter.route("/addgroupmember").post(auth('allrights'), groupController.addGroupMember);
grouprouter.route("/getgroupmember").post(auth('allrights'), groupController.getGroupMember);
grouprouter.route("/getgrouplist").post(auth('allrights'), groupController.getGroupList);


// message Controller
grouprouter.route("/getgroupmessage").post(auth('allrights'), messageController.GetGroupMessage);
grouprouter.route("/sendmessage").post(auth('allrights'), messageController.sendMessage);
grouprouter.route("/likemessage").post(auth('allrights'), messageController.likeMessage);


module.exports = grouprouter;
