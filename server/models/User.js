const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: { type: String },
    passWord: { type: String },
})

module.exports = mongoose.model("User", userSchema);