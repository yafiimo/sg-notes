console.log('in ducks.controller.spec.js');
describe('DuckController', () => {
  let controllerToTest;

  beforeEach(() => {
    module('DuckApp');
    inject(($controller) => {
      controllerToTest = $controller('DuckController');
    });
  });

  describe('initialisation', () => {
    it('should do a basic test', () => {

    });
  });


});
