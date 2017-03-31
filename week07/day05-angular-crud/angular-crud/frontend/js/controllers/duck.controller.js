function DuckController(DuckFactory) {
  var controller = this;

  function init() {
    console.log(controller);
    controller.allDucks = [];
    // make an api call to retrieve the data
    DuckFactory.getAll().then(
      function (response) {
        controller.allDucks = response.data;
        //update the value of allDucks with data from the response
        // this can then be passed on to the view
        console.log('allDucks:', controller.allDucks);
      },
      function (error) {
        console.warn('Error getting ducks:', error);
      }
    );
  }

  init();
}

angular
  .module('DuckApp')
  .controller('DuckController', DuckController);
