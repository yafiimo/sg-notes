angular
  .module('TodoApp')
  .filter('completeStatus', function () {
    return function (inputArray, isComplete) {
      return inputArray.filter(function (element) {
        return element.isComplete === isComplete;
      });
    };
  });
