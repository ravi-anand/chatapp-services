const express = require("express");

const groupController = require("../handler/controller/group.controller");
const messageController = require("../handler/controller/message.controller");

const grouprouter = express.Router();

// group controller
grouprouter.route("/creategroup").post(groupController.createGroup);
grouprouter.route("/addgroupmember").post(groupController.addGroupMember);
grouprouter.route("/getgroupmember").post(groupController.getGroupMember);
grouprouter.route("/getgrouplist").post(groupController.getGroupList);


// message Controller
grouprouter.route("/getgroupmessage").post(messageController.GetGroupMessage);
grouprouter.route("/sendmessage").post(messageController.sendMessage);


module.exports = grouprouter;
