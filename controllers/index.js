//Main controller loaded by app. Loads all other controllers

const express = require('express');
const router = express.Router();

//Controllers to load
router.use('/', require('./home'));
router.use('/user', require('./user'));

module.exports = router