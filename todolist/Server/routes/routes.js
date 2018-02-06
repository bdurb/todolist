module.exports = (app) => {
  const controllerMethods = require('../controllers/todosController');

  app.route('/todos')
    .get(controllerMethods.listTodos)
    .post(controllerMethods.createTodo)
};