
var mongoose = require('mongoose');
var express = require('express');

// add mongoose query and promise support to express
require('express-mongoose');

var models = require('./models');
var routes = require('./routes');
var middleware = require('./middleware');

mongoose.set('debug', true);

mongoose.connect('mongodb://localhost', function (err) {
  if (err) throw err;
  console.log('connect!');
  var app = express();
  middleware(app);
  routes(app);

  app.get('/', function (req, res) {
      res.send(200, 'Hello Mongoose blog');

  })
  app.listen(3001, function () {
    console.log('now listening on http://localhost:3001');
  })
});
