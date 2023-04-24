const resObject = require('../common/commonfunction')
const User = require('../../model/user');

const getUserList = async (req, res) => {
    try {
        const userList = await User.find();
        let response = await resObject.responseobject(200,"/admin/getuserlist", "Successful", userList)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        let response = await resObject.responseobject(500,"/admin/getuserlist", "Something Went wrong", {})
        return res.status(500).json(response);
    }
}

module.exports = {
    getUserList
  };