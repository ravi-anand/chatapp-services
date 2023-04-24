const User = require("../../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const resObject = require('../common/commonfunction');

/**
 *
 * @param {Object} req {userid}
 * @param {Object} res
 */
const createuser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } =
      req.body;

    if (
      !(email && password && firstName && lastName && role)
    ) {
      let response = await resObject.responseobject(400,"/admin/createuser", "All input is required: firstName, lastName, email, password, role", {})
      return res.status(400).json(response);
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      let response = await resObject.responseobject(409,"/admin/createuser", "User Already Exist. Please Login", {})
      return res.status(409).json(response);
    }
    let rolelist = ['admin', 'user']
    if(!rolelist.includes(role)) {
      let response = await resObject.responseobject(409,"/admin/createuser", "Only two roles are allowed: admin, user", {})
      return res.status(409).json(response);
    }

    encryptedUserPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name: firstName,
      last_name: lastName,
      email: email.toLowerCase(), // sanitize
      password: encryptedUserPassword,
      role: role,
    });
    let response = await resObject.responseobject(201,"/admin/createuser", "User Successfully Register")
    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    let response = await resObject.responseobject(500,"/admin/createuser", "Something Went wrong", {})
    return res.status(500).json(response);
  }
};

const edituser = async (req, res) => {
  try {
    const { userid, firstName, lastName, email, role } =
      req.body;

    if (
      !(userid && email && firstName && lastName && role)
    ) {
      let response = await resObject.responseobject(400,"/admin/edituser", "All input is required: userid, firstName, lastName, email, role", {})
      return res.status(400).json(response);
    }

    const oldUser = await User.findOne({ email });
    // console.log(oldUser, userid);
    console.log(oldUser._id.toString(), userid);
    if (oldUser && oldUser._id.toString() !== userid) {
      let response = await resObject.responseobject(409,"/admin/edituser", "User Email Already Exist. Please use new Email", {})
      return res.status(409).json(response);
    }
    let rolelist = ['admin', 'user']
    if(!rolelist.includes(role)) {
      let response = await resObject.responseobject(409,"/admin/edituser", "Only two roles are allowed: admin, user", {})
      return res.status(409).json(response);
    }

    const user = await User.findByIdAndUpdate(userid, {
      first_name: firstName,
      last_name: lastName,
      email: email.toLowerCase(),
      role: role,
    });
    let response = await resObject.responseobject(201,"/admin/edituser", "User Updated Successfully")
    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    let response = await resObject.responseobject(500,"/admin/edituser", "Something Went wrong", {})
    return res.status(500).json(response);
  }
};

module.exports = {
  createuser,
  edituser,
};
