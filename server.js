global._ = require('underscore')

var express = require('express')
  , socketio = require('socket.io')
  , http = require('http')
  , path = require('path')

/*
 * Create Express app, HTTP server and Socket IO server
 */
var app = express()
  , server = http.createServer(app)
  , io = socketio.listen(server)

app.set('__dirname', __dirname)

require('./config')(app)

require('./app/middleware')(app)

require('./config/routes')(app)

require('./app/models')(app)

require('./app/sockets')(app, io)

process.on('uncaughtException', function(err) {
  console.log('Received an uncaughtException');
  console.log(err);
})

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'))
})
