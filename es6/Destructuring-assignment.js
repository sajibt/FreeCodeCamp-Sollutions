// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
let a, b, rest;
[a, b] = [10, 20];
console.log(a); //10
console.log(b); //20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); //30,40,50
const myArray = [10, 20, 30];
console.log(myArray);
const n1 = myArray[0];
console.log(n1);
const [k, l] = myArray;
console.log(k);
console.log(l);

//access array via [ index ] / and access obj via . notations

//this is called array destructuring to independents variables
const [first, second, ...all] = [1, 2, 3, 4, 5];
console.log(first);
console.log(second);
console.log(all);

const user = { name: "John Doe", age: 34 };
// const name = user.name;
// const age = user.age;
// Here's an equivalent assignment statement usuing the Es6 destructuring for Objects
// const { name, age } = user;
const { name: sajib, age: boyos } = user;
console.log(sajib);
console.log(boyos);

const obj = { m: 1, n: 2 };
const { m, n } = obj;
console.log(m);
console.log(n);

// is equivalent to:
// const a = obj.a;
// const b = obj.b;

// console.log(name);
// console.log(age);
// Syntax
// const [a, b] = array;
// const [a, , b] = array;
// const [a = aDefault, b] = array;
// const [a, b, ...rest] = array;
// const [a, , b, ...rest] = array;
// const [a, b, ...{ pop, push }] = array;
// const [a, b, ...[c, d]] = array;

// const { a, b } = obj;
// const { a: a1, b: b1 } = obj;
// const { a: a1 = aDefault, b = bDefault } = obj;
// const { a, b, ...rest } = obj;
// const { a: a1, b: b1, ...rest } = obj;

// let a, b, a1, b1, c, d, rest, pop, push;
// [a, b] = array;
// [a, , b] = array;
// [a = aDefault, b] = array;
// [a, b, ...rest] = array;
// [a, , b, ...rest] = array;
// [a, b, ...{ pop, push }] = array;
// [a, b, ...[c, d]] = array;

// ({ a, b } = obj); // brackets are required
// ({ a: a1, b: b1 } = obj);
// ({ a: a1 = aDefault, b = bDefault } = obj);
// ({ a, b, ...rest } = obj);
// ({ a: a1, b: b1, ...rest } = obj);
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today: todaw, highTomorrow: tomorrow } = HIGH_TEMPERATURES;
console.log(todaw);

const naam = {
  ss: "sajib t",
  ps: "mow t",
};
// const tk = naam.ss;
// console.log(tk);

// const pk = naam.ps;
// console.log(pk);
const { ss: sss, ps: pss } = naam;
// console.log(tk);
console.log(sss);

const user1 = { name: "John Doe", age: 34 };
const { name: userName, age: userAge } = user1;
console.log(userName);

const user2 = {
  johnDoe: {
    age: 20,
    email: "johnDoe@freeCodeCamp.com",
  },
};
console.log(user2);

const {
  johnDoe: { age, email },
} = user2;

console.log(user2.johnDoe);

const {
  johnDoe: { age: newAge, email: newEmail },
} = user2;

console.log(newAge);
console.log(newEmail);

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// const lowToday = LOCAL_FORECAST.today.low;
// console.log(lowToday);

// const highToday = LOCAL_FORECAST.today.high;
// console.log(highToday);

const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;
console.log(lowToday, highToday);

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ba = source.slice(2);
console.log(ba);

function removeFirstTwo(list) {
  // Only change code below this line
  // const arr = list; // Change this line
  // console.log(arr);

  const [a, b, ...arr] = list;
  console.log(a);
  console.log(b);
  console.log(arr);

  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Only change code below this line
// const half = (stats) => {
//   const { max, min } = stats;
//   console.log(max);

//   return (max + min) / 2.0;
// };
// console.log(half(stats));

const half = ({ max, min }) => {
  console.log(max);

  return (max + min) / 2.0;
};
console.log(half(stats));
