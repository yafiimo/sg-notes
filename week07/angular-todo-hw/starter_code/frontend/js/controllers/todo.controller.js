function TodoController ($stateParams, $state,TodoFactory) {
  var controller = this;

  controller.getTodo = function(){
     // $stateParams is like req.params - it finds the thing after the colon eg todo factory line 15
    var todoId = $stateParams.todoId;

    TodoFactory.getOne(todoId).then(
       function success(response) {
         controller.selectedTodo = response.data;
         console.log('todo:',response.data);
       },
       function error(error) {
         console.warn('Error getting todo:',error);
       }
     );
  };

  controller.addTodo = function() {
    console.log('addTodo()');
    TodoFactory.createOne(controller.newTodo).then(
      function sucess(response) {
        console.log('Created new duck:', response);
        $state.go('home');
      },
      function error(error) {
        console.warn('Error creating todo:', error);
      }
    );
  };

  controller.deleteTodo = function(todoId) {
    console.log('deleteTodo(todoId)');
    TodoFactory.deleteOne(todoId).then(
      function sucess(response) {
        console.log('deleted:', response);
        $state.go('home');
      },
      function error(error) {
        console.warn('Error deleting todo:', error);
      }
    );
  };

  controller.editTodo = function (todoId) {
    $state.go('edit', { todoId: todoId });
  };

  controller.updateTodo = function () {
    TodoFactory.editOne(controller.selectedTodo.todo).then(
        function success(response) {
          console.log('todo updated:', response);
        },
        function error(error) {
          console.warn('Error updating todo:', error);
        }
      );
  };



  function init() {
    console.log(controller);
    controller.selectedTodo = undefined;
    controller.allTodos = [];
    controller.newTodo = {};
    TodoFactory.getAll().then(
      function sucess(response) {
        controller.allTodos = response.data;
      },
        function error(error) {
          console.warn('Error getting list items', error);
        }

      );
  }
  init();
}

angular
  .module('TodoApp')
  .controller('TodoController', TodoController);
