const mongoose = require("mongoose");

const grouplikeSchema = new mongoose.Schema({
    messageid: { type: mongoose.Schema.Types.ObjectId },
	likestatus: { type: Number, default: 0 },
	userid: { type: mongoose.Schema.Types.ObjectId },
	createdat: { type: String, default: null }
});

module.exports = mongoose.model("grouplike", grouplikeSchema);