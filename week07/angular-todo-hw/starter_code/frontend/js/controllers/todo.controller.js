function TodoController ($stateParams, $state,TodoFactory) {
  var controller = this;

  controller.getTodo = function(){
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
  controller.getTodoFromList = function(todoId){
    var todoIdFromList = todoId;

    TodoFactory.getOne(todoIdFromList).then(
       function success(response) {
         controller.selectedTodo = response.data;
         console.log('completed todo:',response.data);
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

  controller.updateTodoCompleteStatus = function (todoId, isComplete) {
    console.log(`updateTodoCompleteStatus(${todoId}, ${isComplete})`);
    TodoFactory.updateOneCompleteStatus(todoId, isComplete).then(
      function success(response) {
        console.log('todo complete status set:', response);
        $state.go('home');
      },
      function error(error) {
        console.warn('Error setting todo complete status:', error);
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
          $state.go('home');
        },
        function error(error) {
          console.warn('Error updating todo:', error);
        }
      );
  };

  controller.selectTodoFromList = function(todo) {
    controller.selectedTodo = todo;
    console.log(controller.selectedTodo);
  };



  function init() {
    console.log(controller);
    controller.selectedTodo = undefined;
    controller.allTodos = [];
    controller.newTodo = {};
    controller.completedTodos = 0;
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
