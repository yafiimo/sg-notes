function NewController() {
  var controller = this;

  controller.title = 'Add New Item';


  function init() {

  }
  init();
}

angular
  .module('angularstates')
  .controller('NewController', NewController);
