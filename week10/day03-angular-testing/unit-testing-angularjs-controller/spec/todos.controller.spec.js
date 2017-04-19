describe('TodosController', () => {
  let controllerToTest;
  let MockTodosFactory;

  beforeEach(() => {
    MockTodosFactory = {
      list: [],
      add: jasmine.createSpy(),
      clear: jasmine.createSpy()
    };
    module('todosApp');
    inject(($controller) => {
      controllerToTest = $controller('TodosController', { TodosFactory: MockTodosFactory });
    });
  });

  describe('initialisation', () => {
    it('should initialise list correctly', () => {
      expect(controllerToTest.list).toEqual([]);
    });
    it('should initialise inputText correctly', () => {
      expect(controllerToTest.inputText).toEqual('');
    });
  });

  describe('add()', () => {
    it('should call TodosFactory.add() with correct parameter', () => {
      const inputText = 'new todo 1';

      controllerToTest.inputText = inputText;
      controllerToTest.add();
      expect(MockTodosFactory.add).toHaveBeenCalledWith(inputText);
    });
    it('should clear inputText', () => {
      const inputText = 'new todo 2';

      controllerToTest.inputText = inputText;
      controllerToTest.add();
      expect(controllerToTest.inputText).toEqual('');
    });
  });

});
