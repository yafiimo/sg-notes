function DuckController($state, $stateParams, DuckFactory) {
  var controller = this;

  controller.getDuck = function() {
    var duckId = $stateParams.duckId;

    DuckFactory.getOne(duckId).then(
      function success(response) {
        console.log('duck:', response);
        controller.selectedDuck = response.data;
      },
      function error(error) {
        console.warn('Error getting duck:', error);
      }
    );
  };

  controller.addDuck = function () {
    console.log('addDuck');
    DuckFactory.createOne(controller.newDuck).then(
      function success(response) {
        console.log('Create new duck:', response);
        $state.go('home');
      },
      function error(error){
        console.warn('Error creating new duck', error);
      }
    );
  };

  controller.deleteDuck = function (duckId) {
    DuckFactory.deleteOne(duckId).then(
        function success(response) {
          console.log('Duck deleted:', response);
        },
        function error(error){
          console.warn('Error deleting duck', error);
        }
      );
  };


  function init() {
    console.log(controller);
    controller.selectedDuck = undefined;
    controller.allDucks = [];
    controller.newDuck = {};
    controller.colors = ['red', 'brown', 'black', 'white', 'yellow'];
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
