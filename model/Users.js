const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    facebookId: String,
    profilePic: String
})

module.exports = mongoose.model('chatbotusers',userSchema);