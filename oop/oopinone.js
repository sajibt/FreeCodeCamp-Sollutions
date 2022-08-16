//simple object in js
let duck = {
  name: "Aflac",
  numLegs: 2,
};
console.log(duck["name"]);

// Use Dot Notation to Access the Properties of an Object

// let dog = {
//   name: "Spot",
//   numLegs: 4,
// };
// console.log(dog.name);
// console.log(dog.numLegs);

// Create a Method on an Object

let mdog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + mdog.numLegs + " Legs";
  },
};

let saym = mdog.sayLegs();
console.log(saym);

//Make Code MOre Reusable with the this Keyword

// this refers to the object that the method is born .

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};

dog.sayLegs();

//Define a Constructor function
// Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

// Here is an example of a constructor:

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
// This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively. Constructors follow a few conventions:

// Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might.
function Dogs() {
  this.name = "Doggy";
  this.color = "Brown";
  this.numLegs = 4;
}
const blackDog = new Dogs();
let bld = (blackDog.name = " I m black dog");
console.log(bld);

//Use a Constructor to Create Ojects

function Birds() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

let blueBird = new Birds();
// NOTE: this inside the constructor always refers to the object being created.

// Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. Now blueBird has all the properties defined inside the Bird constructor:

// blueBird.name;
// blueBird.color;
// function Dog() {
// this.name = "Rupert";
// this.color = "brown";
// this.numLegs = 4;
// }
// let hound = new Dog();

// Extend Constructors to Receive Arguments

function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
// let swan = new Bird();
// swan.name = "Carlos";
// swan.color = "white";

let swan = new Bird("Carlos", "White"); // sending as a Arguments to Bird blueprint
console.log(swan);
console.log(swan.name);
swan.color = "Whiteish";
console.log(swan.color);

// Verify an Object's Constructor with instanceof
let Birdi = function (name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
};

let crow = new Birdi("Alexis", "black");

let isCrow = crow instanceof Birdi;
console.log(isCrow); // true

let checkInstance = swan instanceof Bird;
console.log(checkInstance);
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(4);
myHouse instanceof House;
console.log(myHouse.numBedrooms);

// Understand Own Properties

function Bird(name, age) {
  this.name = name;
  this.age = age;
}
Bird.prototype.numLegs = 2; // avoid Duplicate instance

let duck2 = new Bird("Donald");
duck2.numLegs = 4;
let canary = new Bird("Tweety");
// name and numLegs are called own properties, because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties. The following code adds all of the own properties of duck to the array ownProps:

let ownProps = [];

for (let property in duck2) {
  if (duck2.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
let rootProps = [];
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    rootProps.push(property);
  }
}
console.log(rootProps);

console.log(ownProps);
// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }

// let canary = new Bird("Tweety");
// let ownProps = [];
// for (let property in canary){
//   if(canary.hasOwnProperty(property)){
//     ownProps.push(property)
//   }
// }

// Use Prototype Properties to Reduce Duplicate Code
// Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.

// This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.

// A better way is to use the prototype of Bird. Properties in the prototype are shared among ALL instances of Bird. Here's how to add numLegs to the Bird prototype:

Bird.prototype.numLegs = 2;
// Now all instances of Bird have the numLegs property.

console.log(duck.numLegs);
console.log(canary.numLegs);
// Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects. Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype. Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.

function Dogt(name) {
  this.name = name; // own property
}
Dogt.prototype.numLegs = 4; // prototype property

// Only change code above this line
let beagle = new Dogt("Snoopy");
console.log(beagle.numLegs);

// Iterate Over All Properties

// You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

function Peacock(name) {
  this.name = name; //own property
}

Peacock.prototype.numLegs = 2; // prototype property

let indiaPeacock = new Peacock("Indian Peacock");
console.log(Peacock.hasOwnProperty("numLegs")); // own props
console.log(indiaPeacock.numLegs); // prototype props

let ownPropsC = [];
let prototypeProps = [];
for (let property in indiaPeacock) {
  if (indiaPeacock.hasOwnProperty(property)) {
    ownPropsC.push(property);
  } else {
    prototypeProps.push(property); // they are totally different
  }
}
console.log("this is own props " + ownPropsC);
console.log("this is prototype props " + prototypeProps);

// let ownProps = [];
// let prototypeProps = [];

// for (let property in duck) {
//   if(duck.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }

// console.log(ownProps);
// console.log(prototypeProps);

// Understand the Constructor Property

function Crow(name) {
  this.name = name;
}
let blackcrow = new Crow("black crow");
let bluecrow = new Crow("blue crow");

console.log(blackcrow.constructor === Crow); // ocnstructor property
console.log(blackcrow.constructor === Crow);
// Note that the constructor property is a reference to the constructor function that created the instance. The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Crow) {
    return true;
  } else {
    return false;
  }
}
console.log(joinBirdFraternity(bluecrow));

// Change the Prototype to a New Object

// Up until now you have been adding properties to the prototype individually:
function Eagle(name) {
  this.name = name;
}

Eagle.prototype.numLegs = 2;
Eagle.prototype.name = "Eagle";
// This becomes tedious after more than a few properties.

Eagle.prototype.eat = function () {
  console.log("nom nom nom");
};

let dee = (Eagle.prototype.describe = function () {
  console.log("My name is " + this.numLegs);
});
console.log(dee());
console.log(Eagle.hasOwnProperty("name"));

// A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

Bird.prototype = {
  name: this.name,
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

let bbird = new Bird("test eagle");
let bb = bbird.describe();
console.log(bb);
