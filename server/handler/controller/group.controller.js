const moment = require('moment');
const mongoose = require('mongoose');
const Groupmaster = require('../../model/groupmaster');
const Groupmembers = require('../../model/groupmembers');

const createGroup = async (req, res) => {
  try {
    const { groupname, createdby } = req.body;

    if (!(groupname && createdby)) {
      return res.status(400).send("All input is required: groupname, createdby");
    }

    let createdat = moment().format('DD-MM-YYYY HH:mm:ss')
    const groupmaster = await Groupmaster.create({
        groupname: groupname,
        status: 1,
        createdby: createdby,
        createdat: createdat
      });
      let groupmember = await Groupmembers.create({
        groupid: groupmaster._id,
        userid: createdby,
        createdat: createdat,
        status: 1
    })
    let result = {
        message : "Group Created Successfully",
        groupdetails : groupmaster
    }
      return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const addGroupMember = async (req, res) => {
  try {
    const { groupid, userid } = req.body;

    if (!(groupid && userid)) {
      return res.status(400).send("All input is required: groupid, userid");
    }

    const usercheck = await Groupmembers.findOne({ 
        groupid: groupid,
        userid: userid 
    });

    if (usercheck) {
      return res.status(409).send("User Already Exist in the group");
    }

    let createdat = moment().format('DD-MM-YYYY HH:mm:ss')

    let groupmember = await Groupmembers.create({
        groupid: groupid,
        userid: userid,
        createdat: createdat,
        status: 1
    })
    let result = {
        message : "USer added Successfully",
        groupmember: groupmember
    }
    return res.status(200).json(result);

  } catch (error) {
    console.log(error);
  }
};

const deleteGroup = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};


const getGroupMember = async (req, res) => {
  try {
    const { groupid } = req.body;

    if (!(groupid)) {
      return res.status(400).send("All input is required: groupid");
    }

    const groupMemberlist = await Groupmembers.find({ 
        groupid: groupid
    });
    let result = {
      message : "USer added Successfully",
      groupmember: groupMemberlist
  }
  return res.status(200).json(result);
  
  } catch (error) {
    console.log(error);
  }
};

const getGroupList = async (req, res) => {
  try {
    const { userid } = req.body;

    if (!(userid)) {
      return res.status(400).send("All input is required: userid");
    }

    const grouplist = await Groupmembers.find({ 
        userid: userid
    });
    const groups = await Groupmembers.aggregate([
      {
        $match : {
          "userid": new mongoose.Types.ObjectId(userid)
        }
      },
      {
        $lookup: {
          localField: "groupid",
          from: "groupmasters", 
          foreignField: "_id",
          as: "groupdetails"
        }
      }
    ])
    let result = {
      message : "Successfull",
      grouplist: groups,
  }
  return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    createGroup,
    addGroupMember,
    getGroupMember,
    getGroupList
}