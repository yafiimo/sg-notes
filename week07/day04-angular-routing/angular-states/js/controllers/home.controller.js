function HomeController() {
  var controller = this;

  function init() {
    controller.address = {
      street: '1 Strand',
      city: 'London',
      postcode: 'W1'
    };
  }

  init();
}


angular
  .module('angularstates')
  .controller('HomeController', HomeController);
