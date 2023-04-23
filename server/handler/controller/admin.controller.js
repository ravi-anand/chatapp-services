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
      return res.status(400).send("All input is required: firstName, lastName, email, password, role");
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    let rolelist = ['admin', 'user']
    if(!rolelist.includes(role)) {
      return res.status(409).send("Only two roles are allowed: admin, user ");
    }

    encryptedUserPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name: firstName,
      last_name: lastName,
      email: email.toLowerCase(), // sanitize
      password: encryptedUserPassword,
      role: role,
    });
    let response = await resObject.responseobject(201,"/api/admin/createuser", "User Successfully Register")
    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
  }
};

const edituser = async (req, res) => {
  try {
    const { userid, firstName, lastName, email, role } =
      req.body;

    if (
      !(userid && email && firstName && lastName && role)
    ) {
      return res.status(400).send("All input is required: userid, firstName, lastName, email, role");
    }

    const oldUser = await User.findOne({ email });
    // console.log(oldUser, userid);
    console.log(oldUser._id.toString(), userid);
    if (oldUser && oldUser._id.toString() !== userid) {
      return res.status(409).send("User Email Already Exist. Please use new Email");
    }
    let rolelist = ['admin', 'user']
    if(!rolelist.includes(role)) {
      return res.status(409).send("Only two roles are allowed: admin, user ");
    }

    const user = await User.findByIdAndUpdate(userid, {
      first_name: firstName,
      last_name: lastName,
      email: email.toLowerCase(),
      role: role,
    });
    let response = await resObject.responseobject(201,"/api/admin/edit", "User Updated Successfully")
    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createuser,
  edituser,
};
