console.log('in main.js');

var person1 = {
  firstName: 'Bob',
  lastName: 'le Plant',
  email: 'bob@spartaglobal.co',
  age: 12.5
};

var person2 = {
  firstName: 'Aretha',
  lastName: 'Franklin',
  email: 'ms.legend@example.com',
  age: 29
};

var person3 = {
  fristName: 'Joe',
  email: 4,
  hobbies: ['boxing', 'hitting']
};

// adding these objects in an array
var people = [ person1, person2, person3 ];

// i (index of array is less than the number of elements within the array, increment through)
for(var i = 0; i < people.length; i++){

  console.log(people[i].firstName, people[i].age);
 //use .(dot) notation to access properties from other objects
}

var myObject = {};

if(myObject === {}) {
  console.log('myObject is equal to {}');
} else {
  console.log('myObject is not equal to {}');
}

console.log('---Functions:');

var capitalCity = 'London';

function createPerson(firstName, lastName, email, age) {
  var newPerson = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    age: age,
    capitalCity: capitalCity,
    fullName: function(){
      return firstName + ' ' + lastName + ' ' + capitalCity;
    }
  };
  return newPerson;
}

var harald = createPerson('Harald', 'Kumar', 'h.kumar@example.com', 15);
console.log('new person\'s full name:', harald.fullName());
var tola = createPerson('Tola', 'Olaoke', 'tolaoke@spartaglobal.co', 21);
var asma = createPerson('Asma', 'Chaima', 'achaima@spartaglobal.co', 22);
people = [harald, tola, asma];

function isOldEnough(age){
  return (age >= 18);
}

if (isOldEnough(harald.age)) {
  console.log('Come in');
} else {
  console.log('Come back when you are older');
}

for (i = 0; i < people.length; i++) {
  console.log(people[i].fullName(), (isOldEnough(people[i].age)) ? 'is old enough.' : 'is not old enough.');
}

people = [];
people.push(harald, tola, asma);
console.log(people[2]);

console.log('--- OO JavaScript:');

function Circle(radius) {
  this.radius = radius;
  // one way to write an instance method
  this.circumference = function() {
    return 2 * this.radius * Math.PI;
  };
}

// Another way to write an instance method:
// add it to the prototype

Circle.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};

var coin = new Circle(1.2);
var plate = new Circle(7);
var circles = [coin, plate];

for(i = 0; i < circles.length; i++) {
  console.log('Radius is:', circles[i].radius);
  console.log('Circumference is:', circles[i].circumference());
  console.log('Area is:', circles[i].area());
}
