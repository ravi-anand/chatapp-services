const moment = require('moment');
const mongoose = require('mongoose');
const Groupmaster = require("../../model/groupmaster");
const Groupmembers = require("../../model/groupmembers");
const Message = require("../../model/groupmessage");
const Like = require("../../model/grouplike");
const resObject = require('../common/commonfunction');

const GetGroupMessage = async (req, res) => {
  try {
    const { groupid } = req.body;

    if (!groupid) {
      let response = await resObject.responseobject(400,"/group/getgroupmessage", "All input is required: groupid", {})
      return res.status(400).json(response);
    }
    let message = await Message.aggregate([
      {
        $match: {
          groupid: new mongoose.Types.ObjectId(groupid)
        }
      },
      {
        $lookup: {
          localField: "userid",
          from: "users", 
          foreignField: "_id",
          as: "userdetails"
        }
      },
      {
        $project: {
          "_id": 1,
          "groupid": 1,
          "message": 1,
          "userid": 1,
          "status": 1,
          "createdat": 1,
          "userdetails._id": 1,
          "userdetails.first_name": 1,
          "userdetails.last_name": 1,
          "userdetails.email": 1,
          "userdetails.role": 1
        }
      }
    ]);
    let response = await resObject.responseobject(200,"/group/getgroupmessage", "Message fetch Successfully", message)
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    let response = await resObject.responseobject(500,"/group/getgroupmessage", "Something Went wrong", {})
    return res.status(500).json(response);
  }
};


const sendMessage = async (req, res) => {
  try {
    const { groupid, message, userid } = req.body;

    if (!(groupid && message && userid)) {
      let response = await resObject.responseobject(400,"/group/sendmessage", "All input is required: groupid, message, userid", {})
      return res.status(400).json(response);
    }
    let createdat = moment().format('DD-MM-YYYY HH:mm:ss')
    let messagecreated = await Message.create({
        groupid: groupid,
        message: message,
        userid: userid,
        createdat: createdat,
        status: 1
    })
    let response = await resObject.responseobject(200,"/group/sendmessage", "Message Sent Successfully", messagecreated)
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    let response = await resObject.responseobject(500,"/group/sendmessage", "Something Went wrong", {})
    return res.status(500).json(response);
  }
};

const likeMessage = async (req, res) => {
  try {
    const { messageid, userid } = req.body;

    if (!(messageid && userid)) {
      let response = await resObject.responseobject(400,"/group/likemessage", "All input is required: messageid, userid", {})
      return res.status(400).json(response);
    }
    let createdat = moment().format('DD-MM-YYYY HH:mm:ss')
    let messageLiked = await Like.create({
        messageid: messageid,
        likestatus: 1,
        userid: userid,
        createdat: createdat
    })
    let response = await resObject.responseobject(200,"/group/likemessage", "Message Liked Successfully", messageLiked)
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    let response = await resObject.responseobject(500,"/group/likemessage", "Something Went wrong", {})
    return res.status(500).json(response);
  }
};

module.exports = {
    GetGroupMessage,
    sendMessage,
    likeMessage
}