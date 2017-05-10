const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.post('/user', (req, res) => {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.save(error => {
        if (error) res.json({ message: error })
        res.json({ message: 'User created' })
    });
});

router.post('/userlogin', (req, res) => {
    User.findOne({ 'firstname': req.body.username }, (error, user) => {
        if (error) console.log(error)
        user.checkPassword(req.body.password, (error, match) => {
            if (error) console.log(error)
            if (match) {
                req.session.user_id = user._id;
                res.json({ message: 'logged in and session set' });
            } else {
                res.json({ message: 'username or password where incorrect' });
            }
        });
    });
});

module.exports = router