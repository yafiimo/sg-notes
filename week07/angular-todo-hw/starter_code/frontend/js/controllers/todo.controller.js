function TodoController($state, $stateParams, TodoFactory) {
  var controller = this;

  controller.getTodo = function() {
    var todoId = $stateParams.todoId;

    TodoFactory.getOne(todoId).then(
      function success(response) {
        controller.selectedTodo = response.data;
        console.log('Got todo:', response);
      },
      function error(error) {
        console.warn('Error getting todo:', error);
      }
    );
  };

  controller.addTodo = function() {
    TodoFactory.createOne(controller.newTodo).then(
      function success(response) {
        console.log('Created new todo:', response);
        $state.go('home');
      },
      function error(error) {
        console.warn('Error adding new todo:', error);
      }
    );
  };

  controller.deleteTodo = function(todoId) {
    TodoFactory.deleteOne(todoId).then(
      function success(response) {
        console.log('Deleted todo:', response);
      },
      function error(error) {
        console.warn('Error deleting todo:', error);
      }
    );
  };

  function init() {
    controller.title = 'Todo List';
    controller.selectedTodo = undefined;
    controller.allTodos = [];
    controller.newTodo = {};

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
