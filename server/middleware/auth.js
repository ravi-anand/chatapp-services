const jwt = require("jsonwebtoken");

const config = process.env;
var adminrights = ['admin']
var normalrights =['user']
var allrights = ['admin', 'user']
const verifyToken = (...userrights) => (req, res, next) => {
  const token = req.headers['Authorization'] || req.body.token || req.query.token || req.headers["x-access-token"];
  console.log(token);

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    let accessrights = (userrights === 'adminrights') ? adminrights : (userrights === 'normalrights') ? normalrights : allrights;
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    if(!accessrights.includes(decoded.role)) {
        return res.status(403).send("Unauthorized");
    }
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;