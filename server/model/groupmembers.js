const mongoose = require("mongoose");

const groupmemberSchema = new mongoose.Schema({
    groupid: { type: mongoose.Schema.Types.ObjectId },
	userid: { type: mongoose.Schema.Types.ObjectId },
	createdat: { type: String },
	status: { type: Number, default:1 }
});

module.exports = mongoose.model("groupmember", groupmemberSchema);