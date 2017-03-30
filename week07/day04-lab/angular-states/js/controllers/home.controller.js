function HomeController() {
  var controller = this;

  function init() {
    controller.name = 'Simon Smith';
  }
  
  init();
}

angular
  .module('simonsmithapp')
  .controller('HomeController', HomeController);
