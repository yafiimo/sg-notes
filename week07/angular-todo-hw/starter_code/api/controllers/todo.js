var Todo = require('../models/Todo');

// GET
function getAll(request, response) {
  Todo.find(function(error, todos) {
    if (error) return response.json(error);
    response.json(todos);
  }).select('-__v');
}

// POST
function createTodo(request, response) {
  var todo = new Todo(request.body);
  todo.save(function(error) {
    if (error) return response.json(error);
    response.json({todo: todo});
  });
}

// GET
function getTodo(request, response) {
  var id = request.params.id;
  Todo.findById({ _id: id }, function (error, todo) {
    if (error) return response.json(error);
    response.json({todo: todo});
  }).select('-__v');
}

//UPDATE

function updateTodo(request, response) {
  var id = request.params.id;

  Todo.findById({ _id: id }, function(error, todo) {
    if(error) return response.json(todo);

    if (request.body.title) todo.title = request.body.title;
    if (request.body.desc) todo.desc = request.body.desc;
    if (request.body.isComplete) todo.isComplete = request.body.isComplete;

    todo.save(function(error) {
      if (error) return response.status(404).json(error);

      response.json({ todo: todo });
    });
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createTodo: createTodo,
  getTodo: getTodo,
  updateTodo: updateTodo,
}