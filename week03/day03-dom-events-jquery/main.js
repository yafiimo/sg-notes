console.log('in main.js');


// Event listener for when the webpage loads

document.addEventListener('DOMContentLoaded', function () {

  console.log(document); // shows the document


// Add a new list item
  var newListItem = document.createElement('li');
  console.log('new list item:', newListItem);

// add html to the new list item
  newListItem.innerHTML = 'in New York';

// add the class selected to newListItem
  newListItem.classList.add('selected');


// We are going to call .appendChild() on the parent <ul> element.
// That ul element has an id attribute.

// So we retrieve the DOM element that contains the list items,
// because we want to call .appendChild() on it.
// NOTE: we do not pass a CSS selector ('#item-list') when using
// the getElementById() method.

  var listContainer = document.getElementById('item-list');
  console.log('this is the list container', listContainer);
  listContainer.appendChild(newListItem);

  var selectedListItems  = document.querySelectorAll('.selected');

  console.log('selectedListItems:', selectedListItems);

  for (var i = 0; i < selectedListItems.length; i++) {
    console.log('selected list item style', selectedListItems[i].style);
    selectedListItems[i].style.color = 'red';
  }

  console.log(listContainer.children);

// Adding click events
  var pickMeButton = document.getElementById('pickMeBtn');
  console.log(pickMeButton);

  pickMeButton.addEventListener('click', function() {
    pickMeButton.innerHTML = 'CLICKED!';
    alert('Picked!');
  });

});
