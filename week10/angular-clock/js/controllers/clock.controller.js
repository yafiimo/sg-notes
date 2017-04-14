function ClockController() {
  var controller = this;

  function init() {
    controller.clockName = 'Mo\'s Clock';
    controller.arrayTest = [1,2,3,4,5,6,7];
  }

  init();
}

angular
  .module('AngularClock')
  .controller('ClockController', ClockController);
