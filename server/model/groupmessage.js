const mongoose = require("mongoose");

const groupmessageSchema = new mongoose.Schema({
    groupid: { type: mongoose.Schema.Types.ObjectId },
	message: { type: String, default: null },
	userid: { type: mongoose.Schema.Types.ObjectId },
	status: { type: Number },
	createdat: { type: String }
});

module.exports = mongoose.model("groupmessage", groupmessageSchema);