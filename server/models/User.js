const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    id:{
        type:Number
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
}, {collection: "People"})

module.exports = mongoose.model("User", userSchema);