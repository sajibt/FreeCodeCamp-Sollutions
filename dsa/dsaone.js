// use an Array to Store a Collection of Data

let simpleArray = ["one", 2, "three", true, false, undefined, null];
console.log(simpleArray.length);

// Access an Array's Contents Using Bracket Notation
let ourArray = ["a", "b", "c"];
console.log(ourArray[1]);
// you can also set an index to a value using the same notation:
ourArray[1] = "not b anymore";
let bArray = ourArray[1];
console.log(bArray);

for (let i = 0; i < ourArray.length; i++) {
  console.log(ourArray[i]);
}

// Add Items to an Array with push() and unshift()

let romanNumerals = ["XXI", "XXII"];
let newromanNumerals = romanNumerals.push("XXIII"); // push adds a new element end of an Array .
console.log(romanNumerals);

let twentyThree = "XXIII";
let romanNumeralsh = ["XXI", "XXII"];

romanNumeralsh.unshift("XIX", "XX"); // unshift add a new element start of an array .
console.log(romanNumeralsh);
romanNumeralsh.push(twentyThree);
console.log(romanNumeralsh);

let fruits = ["mango", "banana", "jackfruit", "lichi", "Orange", "apple"];
// let fruitspush = fruits.push("Lemon", "Watermelon", "Pineapple"); // add back
let fruitsshift = fruits.unshift("Lemon", "Watermelon", "Pineapple"); // add front
// for (i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

function mixedNumbers(arr) {
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);

  return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));

// Remove Items from an Array with pop() and shift()

let greetings = ["whats up?", "hello", "see ya!"];

greetings.pop(); // remove  last item of an array .
console.log(greetings);
// We can also return the value of the removed element with either method like this:
let popped = greetings.pop();
console.log(popped);

let greetingsh = ["whats up?", "hello", "see ya!"];

let shiftd = greetings.shift();
console.log(shiftd);

greetingsh.shift(); // remove  first item of an array .
console.log(greetingsh);

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));

// Remove Items Using splice()

let array = ["today", "was", "not", "so", "great"];

let slarr = array.splice(2, 2); // start index 2 and delete 2 items.
console.log(slarr);
console.log(array);

// Add Items Using splice()

const day = ["satuday", "saunday", "monday", "thrusday"];
day.splice(3, 1, "Thursday", "wednesday");
console.log(day);

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
function htmlColorNames(arr) {
  // Only change code below this line
  const startIndex = 0;
  const removeTwo = 2;
  arr.splice(startIndex, removeTwo, "DarkSalmon", "BlanchedAlmond");
  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(["DarkGoldenRod", "WhiteSmoke", "LavenderBlush", "PaleTurquoise", "FireBrick"]));

// Here we remove 2 elements, beginning with the third element (at index 2). array would have the value ['today', 'was', 'great'].

// Copy Array Items Using slice()

// The next method we will cover is slice(). Rather than modifying an array, slice() copies or extracts a given number of elements to a new array, l
let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];
console.log(weatherConditions);

let todaysWeather = weatherConditions.slice(1, 3); //  start index one and end in element 3 . 1 theke 3.
console.log(todaysWeather);

function forecast(arr) {
  // Only change code below this line
  return arr.slice(1, 3); // index 1 to index 3
}

// Only change code above this line
console.log(forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"]));

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2)); // index 2 to all
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4)); // index 2 and element 4  if there is only single difference it wil  count the element
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5)); // index 1 to 5
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1)); // p;ositive  index and negative index
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// copy an array with spread operator

let thisArray = [true, true, undefined, false, null];
let copyArr = [...thisArray];
console.log(copyArr);

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]); // if you want to copy with array symbole use Bracket with array symbol
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

// Combine Arrays with the Spread Operator

let noa = ["sage", "rosemary", "parsley", "thyme"];

noa = ["basil", "cilantro", ...noa, "coriander"];
noa.push("4");
console.log(noa);
