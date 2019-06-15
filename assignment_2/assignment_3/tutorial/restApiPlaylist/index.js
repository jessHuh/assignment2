const express = require('express');
const routes = require('./api');

// set up express app
const app = express();

// initialize routes
app.use('/api', require('./api'));

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');

});

