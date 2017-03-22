// var User = require('../models/user-model');
var Book = require('../models/book-model');

// Action: destroy
function destroyBook(req, res) {
  var bookId = req.params.id;

  Book.deleteOne({ _id: bookId }, function (err) {
    if (err) {
      console.log('Could not get user to delete:', err.message);
      // ditto comment above re. keeping complexity to a minimum:
      res.status(404).send('Could not get book to delete');
      return;
    }
    res.redirect('/users');
  });
}

module.exports = {
  destroy: destroyBook
};
