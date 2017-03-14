// controls the 7 restful routes
var users = [
  {
    id: '994',
    firstName: 'Jimmy',
    lastName: 'Fallon',
    email: 'jim@example.com'
  },
  {
    id: 'e01',
    firstName: 'Bob',
    lastName: 'Geldof',
    email: 'bob@example.com'
  }
];

var currentUserId = 100;

function findUserIndexById(userId) {
  return users.findIndex(function (user) {
    return user.id === userId;
  });
}

function getNextUserId() {
  currentUserId++;

  return currentUserId.toString();
}

// Index
function indexUsers(req, res) {
  var html = '<h1>List of users</h1>';

  html += '<ul>';
  for (var i = 0; i < users.length; i++) {
    html += '<li><a href="/users/' + users[i].id + '">' + users[i].firstName + ' ' + users[i].lastName + ' (' + users[i].email + ')' + '</a></li>';
  }
  html += '</ul>';
  res.status(200).send(html);
}

// Action: new
function newUser(req, res) {
  res.status(200).send('<h1>Action: new</h1>');
}

// Action: create
function createUser(req, res) {
  var userId = getNextUserId();
  var newUser = {
    id: userId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  };
  users.push(newUser);

  console.log('req.body:', req.body);
  console.log(users);
  res.status(200).send('<h1>Action: create new user with id ' + newUser.id + '</h1>');
}

// Action: edit
function editUser(req, res) {
  res.status(200).send('<h1>Action: edit</h1>');
}

// Action: update
function updateUser(req, res) {
  // get the user id from params
  // retrieve the index of the users array
  // if user does not exist
  //  set status to 404
  //  set html with error message
  // else
  //  set status to 200
  //  update ec
  var html = '<h1>Update user</h1>';
  var userId = req.params.id;
  var userIndex;
  var user;
  userIndex = findUserIndexById(userId);

  if(userIndex !== 1){
    user = users[userIndex];
    user.id = userId;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    html += '<p>User updated<p>';
    console.log(users);
    res.status(200).send(html);
  } else {
    console.log(users);
    html += '<em>Could not find user with id ' + userId + '</em>';
    res.status(404).send(html);
  }
}

// Action: show
function showUser(req, res) {
  var userId = req.params.id;
  var userIndex;
  var user;
  var status;
  var html = '<h1>Show user ' + userId + '</h1>';

  userIndex = findUserIndexById(userId);

  if (userIndex !== -1) {
    user = users[userIndex];
    status = 200;
    html += '<p>First name: ' + user.firstName + '</p>';
    html += '<p>Last name: ' + user.lastName + '</p>';
    html += '<p>Email: ' + user.email + '</p>';
  } else {
    status = 404;
    html += '<em>User not found with id ' + userId + '</em>';
  }
  res.status(status).send(html);
}

// Action: delete
function destroyUser(req, res) {
  var userId = req.params.id;
  var userIndex;
  var status;
  var html = '<h1>Delete user ' + userId + '</h1>';

  userIndex = findUserIndexById(userId);

  if (userIndex !== -1) {
    // user exists
    users.splice(userIndex, 1);
    status = 200;
    html += 'User with id ' + userId + ' deleted';
  } else {
    // trying to delete non-existent user
    status = 404;
    html += '<em>User with id ' + userId + ' does not exist; cannot delete</em>';
  }
  res.status(status).send(html);
}

module.exports = {
  index: indexUsers,
  new: newUser,
  create: createUser,
  edit: editUser,
  update: updateUser,
  show: showUser,
  destroy: destroyUser
};
