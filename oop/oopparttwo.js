function Bird(name) {
  this.name = name;
}

Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};
let duck = new Bird();

// There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property!
console.log(duck.constructor === Bird); //false without the constructor prototype on prototype Bird
console.log(duck.constructor === Object); // true after added constructor property it  become false
console.log(duck instanceof Bird); // true

// Define the constructor property on the Dog prototype.
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  name: "black dog",
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};
console.log(Dog.prototype.describe());

// Understand Where an Object’s Prototype Comes From
function User() {
  this.name = "Bob";
  return { a: 1, b: 2 };
}

// 3 things  Happens When A Constructor Gets Called
//1. A new empty object gets created.
//2. The this keyword begins to refer to the new object and it becomes the current instance object.
//3. The new object is then returned as the return value of the constructor.
var user = new User(); // 1 object
console.log(typeof User);
console.log(typeof user);
console.log(user.name); // 2  bob  . if there is no return keyword it will  point to the this keyword .
console.log(user.a); // 3 a . if there is return statement it will return the return value not this value

//bird constructor
function Bird2(name) {
  this.name = name;
}

let ducks = new Bird2("Donald");
// duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:

let checkisprototype = Bird2.prototype.isPrototypeOf(ducks);
console.log(checkisprototype);

// Understand the Prototype Chain
// All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

function Bird3(name) {
  this.name = name;
}

let bird3p = typeof Bird3.prototype;
console.log(bird3p); //object prototype  all JavaScript object have a prototype

// Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:

let Parentproto = Object.prototype.isPrototypeOf(Bird3.prototype); // the bird3 is the prototype of object prototype
console.log(typeof Object.prototype); //object prototype itself is an object

console.log(Parentproto); // true

// How is this useful? You may recall the hasOwnProperty method from a previous challenge:

let duck3 = new Bird3("Donald");
duck3.hasOwnProperty("name"); //true

//prototype chain details
//JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype.
function Animal(name) {
  this.name = name;
}

let beagle = new Animal("Snoopy");

//almost all js object have a prototype. also prototype is an object.
console.log(
  "Animal object is prototype of beagle? yes : " + Animal.prototype.isPrototypeOf(beagle) //true
);

// a prototype can have its own protype . ex: Animal.prototype is prototype of Object.prototype / this is called prototype chain .
console.log(Object.prototype.isPrototypeOf(Animal.prototype)); //true
// Object
// Object.prototype
// Animal.prototype

// Use Inheritance So You Don't Repeat Yourself
// function Cat(name) {
// this.name = name;
// }

// Cat.prototype = {
// constructor: Cat,

// };

// function Bear(name) {
// this.name = name;
// }

// Bear.prototype = {
// constructor: Bear,

// };

// function Animal() { }

// Animal.prototype = {
// constructor: Animal,
//   eat: function() {
//   console.log("nom nom nom");
// }

// };
