describe('TodosFactory', () => {
  let factoryToTest;

  beforeEach(() => {
    module('todosApp');
    inject(($factory) => {
      factoryToTest = $factory('TodosFactory');
    });
  });

  describe('add an item to todo list', () => {
    it('should add an item to todo list', () => {
      const newTodoItem = 'go to the shop';
      factoryToTest.add(newTodoItem);
      expect(factoryToTest.list).toContain(newTodoItem);
    });
  });

  describe('clear the todo list', () => {
    it('should clear the list', () => {
      factoryToTest.clear();
      expect(factoryToTest.list.length).toEqual(0);
    });
  });
});
