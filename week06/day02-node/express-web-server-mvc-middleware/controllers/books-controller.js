// var User = require('../models/user-model');
var Book = require('../models/book-model');


// Action: edit
function editBook(req, res) {
  var bookId = req.params.id;

  Book.findOne({ _id: bookId }, function (err, book) {
    if (err) {
      console.log('Could not get book:', err);
      // ditto comment above re. keeping complexity to a minimum:
      res.status(404).send('Could not get book');
      return;
    }
    res.render('books/edit', {
      title: 'Edit Book',
      book: book
    });
  });
}

// Action: update
function updateBook(req, res) {
  var bookId = req.params.id;
  var updatedBook = {
    title: req.body.title,
    author: req.body.author
  };

  Book.findOneAndUpdate({ _id: bookId }, updatedBook, function (err) {
    if (err) {
      console.log('Could not get existing book to update:', err.message);
      // ditto comment above re. keeping complexity to a minimum:
      res.status(404).send('Could not get existing book to update');
      return;
    }
    res.redirect('/users');
  });
}


// Action: destroy
function destroyBook(req, res) {
  var bookId = req.params.id;

  Book.deleteOne({ _id: bookId }, function (err) {
    if (err) {
      console.log('Could not get book to delete:', err.message);
      // ditto comment above re. keeping complexity to a minimum:
      res.status(404).send('Could not get book to delete');
      return;
    }
    res.redirect('/users');
  });
}

module.exports = {
  destroy: destroyBook,
  edit: editBook,
  update: updateBook
};
