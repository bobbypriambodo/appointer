#!/usr/bin/env node

var app = require('./app');
var debug = require('debug')('appointer:server');
var http = require('http');
var models = require('./models');

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

models.sequelize.sync().then(function () {

  var server = http.createServer(app);
  server.listen(port);
  server.on('error', onError);
  console.log("Express app started, listening on port", port);

});

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}