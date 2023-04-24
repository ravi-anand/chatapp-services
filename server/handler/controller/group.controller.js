const moment = require('moment');
const mongoose = require('mongoose');
const Groupmaster = require('../../model/groupmaster');
const Groupmembers = require('../../model/groupmembers');

const createGroup = async (req, res) => {
  try {
    const { groupname, createdby } = req.body;

    if (!(groupname && createdby)) {
      let response = await resObject.responseobject(400,"/group/creategroup", "All input is required: groupname, createdby", {})
      return res.status(400).json(response);
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
    let response = await resObject.responseobject(200,"/group/creategroup", "Group Created Successfully", groupmaster)
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    let response = await resObject.responseobject(500,"/group/creategroup", "Something Went wrong", {})
    return res.status(500).json(response);
  }
};

const addGroupMember = async (req, res) => {
  try {
    const { groupid, userid } = req.body;

    if (!(groupid && userid)) {
      let response = await resObject.responseobject(400,"/group/addgroupmember", "All input is required: groupid, userid", {})
      return res.status(400).json(response);
    }

    const usercheck = await Groupmembers.findOne({ 
        groupid: groupid,
        userid: userid 
    });

    if (usercheck) {
      let response = await resObject.responseobject(409,"/group/addgroupmember", "User Already Exist in the group", {})
      return res.status(409).json(response);
    }

    let createdat = moment().format('DD-MM-YYYY HH:mm:ss')

    let groupmember = await Groupmembers.create({
        groupid: groupid,
        userid: userid,
        createdat: createdat,
        status: 1
    })
    let response = await resObject.responseobject(200,"/group/addgroupmember", "USer added Successfully", groupmember)
    return res.status(200).json(response);

  } catch (error) {
    console.log(error);
    let response = await resObject.responseobject(500,"/group/addgroupmember", "Something Went wrong", {})
    return res.status(500).json(response);
  }
};

const deleteGroup = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    let response = await resObject.responseobject(500,"/group/deletegroup", "Something Went wrong", {})
    return res.status(500).json(response);
  }
};


const getGroupMember = async (req, res) => {
  try {
    const { groupid } = req.body;

    if (!(groupid)) {
      let response = await resObject.responseobject(400,"/group/getgroupmember", "All input is required: groupid", {})
      return res.status(400).json(response);
    }

    const groupMemberlist = await Groupmembers.find({ 
        groupid: groupid
    });
  let response = await resObject.responseobject(200,"/group/getgroupmember", "USer added Successfully", groupMemberlist)
  return res.status(200).json(response);
  
  } catch (error) {
    console.log(error);
    let response = await resObject.responseobject(500,"/group/getgroupmember", "Something Went wrong", {})
    return res.status(500).json(response);
  }
};

const getGroupList = async (req, res) => {
  try {
    const { userid } = req.body;

    if (!(userid)) {
      let response = await resObject.responseobject(400,"/group/getgrouplist", "All input is required: userid", {})
      return res.status(400).json(response);
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
  let response = await resObject.responseobject(200,"/group/getgrouplist", "Successfull", groups)
  return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    let response = await resObject.responseobject(500,"/group/getgrouplist", "Something Went wrong", {})
    return res.status(500).json(response);
  }
};

module.exports = {
    createGroup,
    addGroupMember,
    getGroupMember,
    getGroupList
}