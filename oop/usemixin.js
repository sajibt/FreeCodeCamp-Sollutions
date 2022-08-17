// As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.

// For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

let flyMixin = function (obj) {
  obj.fly = function () {
    console.log("Flying, wooosh!");
  };
};
// The flyMixin takes any object and gives it the fly method.

let bird = {
  name: "Donald",
  numLegs: 2,
};

let plane = {
  model: "777",
  numPassengers: 524,
};

flyMixin(bird);
flyMixin(plane);
// Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. Now bird and plane can both fly:

console.log(bird.fly());
console.log(plane.fly());

// The console would display the string Flying, wooosh! twice, once for each .fly() call.
let bird2 = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

// Only change code below this line

let glideMixin = function (obj) {
  obj.glide = function () {
    console.log("glide glide glide");
  };
};
glideMixin(bird2);
glideMixin(boat);

let glibird = bird2.glide();
console.log(glibird);
console.log(boat.glide());

// Use Closure to Protect Properties Within an Object from Being Modified Externally
// In the previous challenge, bird had a public property name. It is considered public because it can be accessed and changed outside of bird's definition.

bird.name = "Duffy";
console.log(bird.name);

// The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.

function Birdex() {
  this.hatchedEgg = 10;

  this.getHatchedEggCount = function () {
    let totalDuck = 14;
    console.log(totalDuck);

    return this.hatchedEgg; // this is calledd closures . child function has accessed  to its parent but parent can not access from the children funciton .
  };
}

let ducky = new Birdex();
console.log(ducky.getHatchedEggCount());

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
console.log(init());

function Bird() {
  let weight = 15;
  this.getWeight = function () {
    return weight;
  };
}

// Understand the Immediately Invoked Function Expression (IIFE)

(function sayName() {
  console.log("What is your name");
  console.log(typeof sayName); //function
})();

// Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).

(function () {
  console.log("A cozy nest is ready");
})();

// Use an IIFE to Create a Module

// An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. For example, an earlier challenge defined two mixins:

// function glideMixin(obj) {
//   obj.glide = function () {
//     console.log("Gliding on the water");
//   };
// }
// function flyMixin(obj) {
//   obj.fly = function () {
//     console.log("Flying, wooosh!");
//   };
// }
// We can group these mixins into a module as follows:

let motionModule = (function () {
  return {
    glideMixin2: function (obj) {
      obj.glide = function () {
        console.log("Gliding on the water");
      };
    },
    flyMixin2: function (obj) {
      obj.fly = function () {
        console.log("Flying, wooosh!");
      };
    },
  };
})();
// Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. This returned object contains all of the mixin behaviors as properties of the object. The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:
let duck = new Bird();

motionModule.glideMixin2(duck);
// duck.glide();
console.log(duck.glide());
