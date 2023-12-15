const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
		},
		id: {
			type: Number,
		},
		authorId: {
			type: Number,
		},
		authorName: {
			type: String,
		},
		image: {
			type: String,
		},
		description: {
			type: String,
		},
	},
	{ collection: "posts" }
);

module.exports = mongoose.model("Post", postSchema);