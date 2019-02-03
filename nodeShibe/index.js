const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const passport = require('passport');
const cors = require('cors');

const userRouter = require('./routes/v1');

const app = express();


// mongoose.connect('mongodb://localhost/shibe');
// mongoose.Promise = bluebird;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use(cors());

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next){
    console.log(err); // To see properties of message in our console
    res.status(err.status || 500);
    res.send({status: 'fail', message: err.message, data: {}});
});

let port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('App listening on port 3000!');
});

app.use('/api/v1', userRouter);

app.get('/status',function(req, res) {
  res.send({
    status: 'success',
    message: 'success',
    data: {}
  });
}); 

