var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users-controller');
var booksController = require('../controllers/books-controller');

// Home Page
router.get('/', function (req, res) {
  res.render('index', {
    title: 'Home'
  });
});

// Users
router.route('/users')
  .get(usersController.index)
  .post(usersController.create);

router.get('/users/new', usersController.new);
router.get('/users/:id/edit', usersController.edit);

router.route('/users/:id')
  .put(usersController.update)
  .get(usersController.show)
  .delete(usersController.destroy);


// Books
router.post('/books', booksController.create);

router.get('/books/new', booksController.new);
router.get('/books/:id/edit', booksController.edit);

router.route('/books/:id')
  .put(booksController.update)
  .delete(booksController.destroy);


module.exports = router;
