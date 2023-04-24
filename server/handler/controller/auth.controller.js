const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../model/user");
const resObject = require('../common/commonfunction');

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } =
      req.body;

    if (!(email && password && firstName && lastName && role)) {
      let response = await resObject.responseobject(400,"/api/register", "All input is required: firstName, lastName, email, password, role", {})
      return res.status(400).json(response);
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      let response = await resObject.responseobject(409,"/api/register", "User Already Exist. Please Login", {})
      return res.status(409).json(response);
    }

    encryptedUserPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name: firstName,
      last_name: lastName,
      email: email.toLowerCase(), // sanitize
      password: encryptedUserPassword,
      role: role
    });

    const token = jwt.sign(
      { user_id: user._id, email, role: role },
      process.env.TOKEN_KEY,
      {
        expiresIn: "5h",
      }
    );
    user.token = token;
    let response = await resObject.responseobject(201,"/api/register", "User Successfully Register", user)
    return res.status(201).json(response);
  } catch (err) {
    console.log(err);
    let response = await resObject.responseobject(500,"/api/register", "Something Went wrong", {})
    return res.status(500).json(response);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      let response = await resObject.responseobject(400,"/api/login", "All input is required: email, password", {})
      return res.status(400).json(response);
    }
    
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email, role: user.role },
        process.env.TOKEN_KEY,
        {
          expiresIn: "5h",
        }
      );
      user.token = token;
      let response = await resObject.responseobject(200,"/api/login", "User Successfully Loggedin", user)
      return res.status(200).json(response);
    }
    let response = await resObject.responseobject(400,"/api/login", "Invalid Credentials", {})
    return res.status(400).json(response);

    // Our login logic ends here
  } catch (err) {
    console.log(err);
    let response = await resObject.responseobject(500,"/api/login", "Something Went wrong", {})
    return res.status(500).json(response);
  }
};
const logout = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    let response = await resObject.responseobject(500,"/api/logout", "Something Went wrong", {})
    return res.status(500).json(response);
  }
};

module.exports = {
  login,
  register,
  logout,
};
