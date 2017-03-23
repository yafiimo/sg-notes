var Book = require('../models/book-model');
var User = require('../models/user-model');

// Action: new
function newBook(req, res) {
  res.render('books/new', {
    title: 'New book'
  });
}

// Action: create
function createBook(req, res) {
  var userId = req.body.userId;
  var newBook = new Book();
  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.user = userId;
  console.log('newBook:', newBook);
  console.log('userId:', userId);
  newBook.save(function(err, bookSaved){
    if (err) {
      console.log('could not create book: err:', err);
      process.exit(1);
    }
    console.log('book saved:', bookSaved);

    User.find({ _id: userId }, function(err, user) {
      if(err){
        console.log('Could not find user');
      }
      console.log('this is the user:', user);
      user[0].books.push(bookSaved._id);
      console.log('this is the new user:', user);
    });
    //
    // User.save(function (err) {
    //   if(err){
    //     console.log('Could not create new book: error:');
    //   }
    // });
    res.status(400);
    res.redirect('/users/' + userId);

    return;
  });



}

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
  var userId = req.body.userId;
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
    res.redirect('/users/' + userId);
  });
}


// Action: destroy
function destroyBook(req, res) {
  var bookId = req.params.id;
  var userId = req.body.userId;

  Book.deleteOne({ _id: bookId }, function (err) {
    if (err) {
      console.log('Could not get book to delete:', err.message);
      // ditto comment above re. keeping complexity to a minimum:
      res.status(404).send('Could not get book to delete');
      return;
    }
    res.redirect('/users/' + userId);
  });
}

module.exports = {
  destroy: destroyBook,
  edit: editBook,
  update: updateBook,
  new: newBook,
  create: createBook
};
