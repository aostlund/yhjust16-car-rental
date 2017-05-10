const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        id: Number,
        username: String,
        password: String,
        firstname: String,
        lastname: String
    }
);

module.exports = mongoose.model('user', userSchema)