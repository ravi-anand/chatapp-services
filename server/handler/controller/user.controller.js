const responseobject = require('../common/commonfunction')
const User = require('../../model/user');

const getUserList = async (req, res) => {
    try {
        const userList = await User.find();
        let result = {
            userlist : userList
        } 
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUserList
  };