const moment = require('moment');
const mongoose = require('mongoose');
const Groupmaster = require("../../model/groupmaster");
const Groupmembers = require("../../model/groupmembers");
const Message = require("../../model/groupmessage");
const Like = require("../../model/grouplike");

const GetGroupMessage = async (req, res) => {
  try {
    const { groupid } = req.body;

    if (!groupid) {
      return res.status(400).send("All input is required: groupid");
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
    // let message = await Message.find({ groupid: groupid });
    let result = {
      message: "Message fetch Successfully",
      message: message,
    };
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};


const sendMessage = async (req, res) => {
  try {
    const { groupid, message, userid } = req.body;

    if (!(groupid && message && userid)) {
      return res.status(400).send("All input is required: groupid, message, userid");
    }
    let createdat = moment().format('DD-MM-YYYY HH:mm:ss')
    let messagecreated = await Message.create({
        groupid: groupid,
        message: message,
        userid: userid,
        createdat: createdat,
        status: 1
    })
    let result = {
        message : "Message Sent Successfully",
        messagecreated: messagecreated
    }
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const likeMessage = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    GetGroupMessage,
    sendMessage
}