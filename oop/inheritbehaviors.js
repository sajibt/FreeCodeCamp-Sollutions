//iInherit Behaviors from a Supertype
function Animal(name) {
  this.name = name;
}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};
Animal.prototype.age = 10;

// Animal.prototype = {
// constructor: Animal,
//   eat: function() {
//   console.log("nom nom nom");
// }

console.log(Animal.prototype);

// let animal = new Animal();
// let eatnow = animal.eat();
// console.log(eatnow);
// There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge. Instead, here's an alternative approach without those disadvantages:

let animal = Object.create(Animal.prototype);
console.log(animal.age);

// Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object. By setting the prototype of animal to be the prototype of Animal, you are effectively giving the animal instance the same "recipe" as any other instance of Animal
console.log(Animal.prototype.isPrototypeOf(animal)); // true
console.log(animal.eat());
console.log(animal instanceof Animal); //true

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
console.log(duck.eat());

let beagle2 = Object.create(Animal.prototype); // Change this line

// Set the Child's Prototype to an Instance of the Parent
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Dog() {}

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype); //Child prototype point to the root animal prototype
let beagle = Object.create(Dog.prototype);
console.log(beagle.eat());
