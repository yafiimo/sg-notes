var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
	title: String,
  desc: String,
	isComplete: { type: Boolean, default: false }
});

module.exports = mongoose.model('Todo', TodoSchema);

