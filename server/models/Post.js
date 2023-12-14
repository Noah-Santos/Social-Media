const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    title: {
        type:String
    },
    id:{
        type:Number
    },
    author:{
        type:String
    },
    image:{
        type:String
    },
    desc:{
        type:String
    }
}, {collection: "Blog-Posts"})

module.exports = mongoose.model("Post", postSchema);

//People
//name, email, password, id