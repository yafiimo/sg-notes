function ClockController($timeout) {
  var controller = this;

  controller.tick = function() {
    controller.date = new Date();
    $timeout(controller.tick, controller.tickInterval);
  };

  function init() {
    controller.tickInterval = 1000;
  }

  $timeout(controller.tick, controller.tickInteval);


  init();
}

angular
  .module('AngularClock')
  .controller('ClockController', ClockController);
