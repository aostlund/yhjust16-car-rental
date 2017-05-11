//Entry point of backend

const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');

const app = express();

//Set up database
const mongoose = require('mongoose');
const configDB = require('./config/database.js');
mongoose.connect(configDB.uri);

//Set view engine
app.set('view engine', 'ejs');

//Load and configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'jätte hemligt' }));
app.use(express.static(__dirname + '/public'));

//Loads controller
app.use(require('./controllers'));

app.listen(3000, function() {
    console.log('Listening on port 3000...');
});