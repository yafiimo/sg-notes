describe('TodosFactory', () => {
  let factoryToTest;

  beforeEach( () => {
    module('todosApp');
  });

  beforeEach(inject((TodosFactory) => {
    factoryToTest = TodosFactory;
  }));

  describe('add an item to todo list', () => {
    it('should add an item to todo list', () => {
      const testNewTodoItem = 'Buy some milk';
      factoryToTest.add(testNewTodoItem);
      expect(factoryToTest.list).toContain(testNewTodoItem);
    });
    it('should add an item to the end of the todo list', () => {
      const testNewTodoItem1 = 'Buy some milk';
      const testNewTodoItem2 = 'Go to the barbers';
      factoryToTest.add(testNewTodoItem1);
      factoryToTest.add(testNewTodoItem2);
      expect(factoryToTest.list[factoryToTest.list.length - 1]).toEqual(testNewTodoItem2);
    });
  });

  describe('clear the todo list', () => {
    it('should clear the list', () => {
      factoryToTest.add('Go to the gym');
      factoryToTest.clear();
      expect(factoryToTest.list.length).toEqual(0);
    });
  });
});
