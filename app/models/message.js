var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messages = new Schema({
	content: String,
	user_nickname: String
});

mongoose.model('Message', messages);