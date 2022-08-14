const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
// function makeList(arr) {
//   "use strict";
//   // change code below this line
//   const failureItems = [];
//   for (let i = 0; i < arr.length; i++) {
//     failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
//   }
//   // change code above this line
//   return failureItems;
// }
// const failureItems = [];

// for(var i=0; i<arr.length; i++) {
// failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
// }
function makeList(arr) {
  "use strict";
  // change code below this line
  const failureItems = arr.map((item) => `<li class="text-warning">${item}</li>`);
  // change code above this line
  return failureItems;
}

// const failureItems = arr.map((item) => `<li class="text-warning">${item}</li>`);

const failuresList = makeList(result.failure);
console.log(failuresList);

// const getMousePosition = (x, y) => ({
//   x: x,
//   y: y,
// });
// const getMousePosition = (x, y) => ({ x, y });

const person = {
  name: "Taylor",
  sayHello: function () {
    return `Hello! My name is ${this.name}.`;
  },
};

// With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:
const persons = {
  name: "Sajib",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  },
};

console.log(person.sayHello());
console.log(persons.sayHello());

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

// Use class Syntax to Define a Constructor Function

// var SpaceShuttle = function (targetPlanet) {
//   const ht = (this.targetPlanet = targetPlanet);
//   console.log(ht);
// };
// var zeus = new SpaceShuttle("Jupiter");
// var lass = new SpaceShuttle("fjksdlj");

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
    console.log(targetPlanet);
  }
}
const zeus = new SpaceShuttle("Jupiter");
console.log(zeus.targetPlanet);

const zeus2 = new SpaceShuttle("sajib");
