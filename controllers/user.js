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

router.get('/signup', (req, res) => {
    res.render('signup.ejs')
});

module.exports = router