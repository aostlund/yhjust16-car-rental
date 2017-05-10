const express = require('express');

const app = express();

//Set up database
const mongoose = require('mongoose');
const configDB = require('./config/database.js');
mongoose.connect(configDB.uri);

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(require('./controllers'))

app.listen(3000, function() {
  console.log('Listening on port 3000...')
})