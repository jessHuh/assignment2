const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();
var port = process.env.PORT || 4000;

//connect to mongodb
mongoose.connect('mongodb://localhost/taskgo');
mongoose.Promise = global.Promise;

app.use(express.static('./public'));


app.use(bodyParser.json());
// initialize routes
app.use('/api', require('./api'));

//error handling middleware
app.use(function(err, req, res, next) {
    // console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests

// var port = process.env.PORT || 4000;
app.listen(port, function(){
    console.log('now listening for requests' + port);

});

