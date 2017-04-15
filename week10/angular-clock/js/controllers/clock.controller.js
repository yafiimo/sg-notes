function ClockController($timeout) {
  var controller = this;

  controller.tick = function() {
    controller.date = new Date();
    $timeout(controller.tick, 1000);
  };

  function init() {
    $timeout(controller.tick, 1000);
  }

  init();
}

angular
  .module('AngularClock')
  .controller('ClockController', ClockController);
