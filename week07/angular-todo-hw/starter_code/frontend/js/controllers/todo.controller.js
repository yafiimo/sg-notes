function TodoController(TodoFactory) {
  var controller = this;

  function init() {
    controller.title = 'Todo List';
    controller.allTodos = [];

    TodoFactory.getAll().then(
      function success(response) {
        controller.allTodos = response.data;
      },
      function error(error) {
        console.warn('Error getting todo-list:', error);
      }
    );
  }

  init();
}

angular
  .module('TodoApp')
  .controller('TodoController', TodoController);
