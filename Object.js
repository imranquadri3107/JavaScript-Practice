// Different Methods for Creating Objects in JavaScript

// 3 Different ways of Creating JavaScript Object

// Method 1:  Object Literal Syntax

const myBoat = {
  length: 24,
  maxSpeed: 45,
  passengers: 14,
  getLength: function(){
    return this.length;
  }
};

// Method 2: new Keyword and Object Constructor

const student = new Object();

student.grade = 12;
student.gpa = 3.7;
student.classes = ['English', 'Algebra', 'Chemistry'];

student.getClasses = function(){
  return this.classes;
};

// Method 3: Constructor function

function Car(color, brand, year){
  this.color = color;
  this.brand = brand;
  this.year = year;
}

Car.prototype.getColor = function(){
  return this.color;
};

const carlysCar = new Car('Blue', 'Ferrari', 2015);
const imranCar = new Car('Red', 'Tesla', 2019);

console.log(carlysCar.getColor());
console.log(imranCar.getColor());


// Function Constructor

function User(firstName, lastName, age, gender) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.age = age;
 this.gender = gender;
};

var user1 = new User('Imran', 'Quadri', 26, 'Male');
User {firstName: "Imran", lastName: "Quadri", age: 26, gender: "Male"}
var user200 = new User('Bushra', 'Quadri', 23, 'Female');
User {firstName: "Bushra", lastName: "Quadri", age: 23, gender: "Female"}


// Two Object Comparison

// Two Object Comparison. Two objects are never equal to each other. And this is because in javascript we pass objects by reference instead of by value.

const user1 = {
  name: 'Imran',
  age: 24,
};

const user2= {
  name: 'Imran',
  age: 24,
};

//const user2 = user1;

console.log(user1 == user2);
console.log(JSON.stringify(user1) === JSON.stringify(user2));



//
// Objects and Strings

var string1 = 'Tampa';
var string2 = string1;

string1 = 'Venice';

console.log(string2);

///////////////////////////////

var person1 = {
  name: 'Alex',
  age:30
};

var person2 = person1;
person2.name = 'Kyle';

console.log(person1);

//Output

// Tampa
// { name: 'Kyle', age: 30 }
