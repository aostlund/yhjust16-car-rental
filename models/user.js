const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    id: Number,
    username: String,
    password: String,
    firstname: String,
    lastname: String
});

UserSchema.pre('save', next => {
    const user = this;
    if (!user.isModified('password')) return next()
    bcrypt.genSalt((error, salt) => {
        if (error) return next(error)
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error)

            user.password = hash;
            next()
        })
    })
});

UserSchema.methods.checkPassword = (password, callback) => {
    bcrypt.compare(password, this.password, (error, match) => {
        if (error) return callback(error)
        callback(null, match);
    });
}

module.exports = mongoose.model('User', UserSchema);