const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.get('/', (req, res) => {
    if (!req.session.user) {
        res.redirect('/signup')
    }
    res.render('index.ejs', req.session.user)
});

router.get('/signup', (req, res) => {
    res.render('signup.ejs')
});

router.get('/login', (req, res) => {
    res.render('login.ejs')
})
module.exports = router