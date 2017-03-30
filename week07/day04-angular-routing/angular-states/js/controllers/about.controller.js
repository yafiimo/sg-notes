function AboutController() {
  var controller = this;

  function init() {
    console.log('HomeController:', controller);
    controller.details = {
      contact: '0123 456 7890',
      email: 'aboutus@example.com',
      postcode: 'W1'
    };
  }

  init();
}

angular
  .module('angularstates')
  .controller('AboutController', AboutController);
