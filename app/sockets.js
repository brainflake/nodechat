var mongoose = require('mongoose');
var Message = mongoose.model('Message');

module.exports = function(app, io) {
	var rooms = [];

  io.sockets.on('connection', function(socket) {
    console.log('got a connection!');
    rooms.push(socket);

    socket.on('message', function(data) {
      console.log('Got a new event!');
      console.log(data);

      _.each(rooms, function(room) {
        room.emit('message', data);
      });

      var newMessage = new Message();
      newMessage.content = data.content;
      newMessage.user_nickname = data.user;

      newMessage.save(function(err) {
        if (err) {
          console.log('Ahhh!');
          console.log(err);
        }
      });

    });
	});
}
