const mongoose = require('mongoose');

const Todo = mongoose.model('Todo');

const STATUS_USER_ERROR = 422;

const createTodo = (req, res) => {
  const {todo} = req.body;
  const newTodo = new Todo({ todo });
  newPost.save()
    .then((newTodo) => {
      res.json(newTodo);
    })
    .catch((err) => {
      res.status(STATUS_USER_ERROR);
      res.json(err);
    })
};

const listTodos = (req, res) => {
  Todo.find({})
    .populate('todo')
    .exec()
    .then((todo) => {
      res.json(todos);
    })
    .catch((err) => {
      res.status(STATUS_USER_ERROR);
      res.json({ stack: err.stack, message: err.message});
    });
};

module.exports = {
  createTodo,
  listTodo,
};