module.exports = (app) => {
  const controllerMethods = require('../controllers/todosController');

  app.route('/posts')
    .get(controllerMethods.listTodos)
    .post(controllerMethods.createTodo);
};