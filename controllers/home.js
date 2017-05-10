const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.get('/', (req, res) => {
    if (!req.session.user_id) {
        res.redirect('/signup')
    }
    res.render('index.ejs', { title: 'YHJUST16' })
});

router.get('/signup', (req, res) => {
    res.render('signup.ejs')
});

module.exports = router