function HomeController() {
  var controller = this;

  controller.title = 'To-do List';

  controller.addTitle = 'Add new TODOS';
  controller.addNewTodos = function() {
    controller.todos.push(controller.newTodos);
    controller.newTodos = '';
  };

  controller.updateTodos = function(index) {
    if(controller.updatedTodosField[index]) {
      controller.todos[index] = controller.updatedTodosField[index];
    }
  };

  controller.deleteTodos = function(index) {
    controller.todos.splice(index, 1);
  };

  controller.addToCompleted = function(todo) {
    controller.completed.push(todo);
  };



  function init() {
    controller.todos = ['Buy milk and eggs', 'Finish angular project', 'Activate gym membership','Go for house viewing'];
    controller.completed = [];
  }
  init();
}


angular
  .module('angularstates')
  .controller('HomeController', HomeController);
