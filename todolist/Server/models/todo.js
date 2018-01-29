const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
  }
});

module.exports = mongoose.model('Todo', TodoSchema);