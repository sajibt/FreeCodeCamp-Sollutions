// A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

// For example, Bird is a constructor that inherits its prototype from Animal:

function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
let brirdcon = (Bird.prototype.constructor = Bird);

// In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects. Here, Bird will get a fly() function. Functions are added to Bird's prototype the same way as any constructor function:

Bird.prototype.fly = function () {
  console.log("I'm flying!");
};
// Now instances of Bird will have both eat() and fly() methods:

console.log(Bird.prototype);
let duck = new Bird();
duck.eat();
duck.fly();

function Dog() {}

// Dog.prototype = Object.create(Animal.prototype);
Dog.prototype = new Animal();
Dog.prototype.fly = function () {
  console.log("you aer flying!");
};

let dog = new Dog();

console.log(dog.eat());
console.log(dog.fly());
console.log(Dog.prototype);

// function Animal() { }
// Animal.prototype.eat = function() { console.log("nom nom nom"); };

// function Dog() { }

// // Only change code below this line

// Dog.prototype = new Animal()
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = function () {
// console.log("Woof!")
// }

// // Only change code above this line

// let beagle = new Dog();

// Override Inherited Methods
// an object can inherit its behavior (methods) from another object by referencing its prototype object:

// ChildObject.prototype = Object.create(ParentObject.prototype); //inhertence
// Then the ChildObject received its own methods by chaining them onto its prototype:

// ChildObject.prototype.methodName = function() {...};

function Animal2() {}
Animal2.prototype.eat = function () {
  return "nom nom nom";
};
function Bird() {}

Bird.prototype = Object.create(Animal2.prototype);

Bird.prototype.eat = function () {
  return "peck peck peck";
};
let bird = new Bird();

let sbird = bird.eat();
console.log(sbird);

function Tiger() {
  this.name = "Tigerrrrrrrrrrrr";
  this.grew = function () {
    console.log("grew grew grew");
  };
  this.eat = function () {
    console.log("boo boo boo");
  };
}
Tiger.prototype = new Animal2();
let tiger = new Tiger();
console.log(tiger.grew());
console.log(tiger.eat());

function Bird() {}

Bird.prototype.fly = function () {
  return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird.";
};

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
