const mongoose = require("mongoose");

const groupmasterSchema = new mongoose.Schema({
    groupname: { type: String },
	status: { type: Number, default: 1 },
	createdby: { type: String, default: null },
    createdat: { type: String, default: null }
});

module.exports = mongoose.model("groupmaster", groupmasterSchema);