const jwt = require("jsonwebtoken");
const resObject = require('../handler/common/commonfunction');

const config = process.env;
var adminrights = ['admin']
var normalrights =['user']
var allrights = ['admin', 'user']
const verifyToken = (...userrights) => async (req, res, next) => {
  const token = req.headers['Authorization'] || req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    let response = await resObject.responseobject(403,"", "A token is required for authentication", {})
    return res.status(403).json(response);
  }
  try {
    let accessrights = (userrights === 'adminrights') ? adminrights : (userrights === 'normalrights') ? normalrights : allrights;
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    if(!accessrights.includes(decoded.role)) {
      let response = await resObject.responseobject(403,"", "Unauthorized", {})
      return res.status(403).json(response);
    }
    req.user = decoded;
  } catch (err) {
    let response = await resObject.responseobject(401,"", "Invalid Token", {})
    return res.status(401).json(response);
  }
  return next();
};

module.exports = verifyToken;