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
        else {
            req.session.user = user
            res.redirect('/');
        }
    });
});

router.post('/userlogin', (req, res) => {
    User.findOne({ 'firstname': req.body.username }, (error, user) => {
        if (error) console.log(error)
        else if (user) {
            user.checkPassword(req.body.password, (error, match) => {
                if (error) console.log(error)
                if (match) {
                    req.session.user = user;
                    res.redirect('/')
                } else {
                    res.json({ message: 'username or password where incorrect' });
                }
            });
        } else {
            res.json({ message: 'username or password where incorrect' });
        }
    });
});

router.get('/userlogout', (req,res) => {
    req.session.destroy((error) => {
        if (error) console.log(error)
        else res.redirect('/login')
    })
});

module.exports = router