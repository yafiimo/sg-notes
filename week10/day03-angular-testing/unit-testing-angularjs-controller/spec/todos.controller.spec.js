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

  describe('clear()', () => {
    it('should call TodosFactory.clear()', () => {
      controllerToTest.clear();
      expect(MockTodosFactory.clear).toHaveBeenCalled();
    });
  });

  describe('isSubmitButtonDisabled()', () => {
    it('should return false if there is an input text', () => {
      const inputText = 'new todo';
      controllerToTest.inputText = inputText;
      expect(controllerToTest.isSubmitButtonDisabled()).toBe(false);
    });
    it('should return true if there is no input text', () => {
      const inputText = '';
      controllerToTest.inputText = inputText;
      expect(controllerToTest.isSubmitButtonDisabled()).toBe(true);
    });
  });

  describe('isClearButtonDisabled()', () => {
    it('should return true if todo list is empty', () => {
      const list = [];
      controllerToTest.list = list;
      expect(controllerToTest.isClearButtonDisabled()).toBe(true);
    });
    it('should return false if todo list is not empty', () => {
      const list = ['test todo 1', 'test todo 2'];
      controllerToTest.list = list;
      expect(controllerToTest.isClearButtonDisabled()).toBe(false);
    });
  });

});
